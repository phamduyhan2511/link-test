import React, { forwardRef } from '../../i3NodeModules/react';
import ehealth from '../general/i3app.js'
// material-ui components
import withStyles from "../../i3NodeModules/@material-ui/core/styles/withStyles";
import Slide from "../../i3NodeModules/@material-ui/core/Slide";
import Dialog from "../../i3NodeModules/@material-ui/core/Dialog";
import DialogTitle from "../../i3NodeModules/@material-ui/core/DialogTitle";
import DialogContent from "../../i3NodeModules/@material-ui/core/DialogContent";
import DialogActions from "../../i3NodeModules/@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "../../i3NodeModules/@material-ui/icons/Close";
// core components
import Button from "../components/CustomButtons/Button.jsx";

import modalStyle from "modalStyle.jsx";
import $ from '../../i3NodeModules/jquery';
const immutable = require('../../i3NodeModules/object-path-immutable');
const SlideDown = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});
const SlideLeft = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});
const SlideRight = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});
const SlideUp = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
class ModalManager extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modals: [],
        }
        this._getSlideDirection = this._getSlideDirection.bind(this);
    }
    getLastModal = () => {
        if (this.state.modals.length > 0) {
            //canBack: Co modal de tat
            return ({ index: this.state.modals.length - 1, canBack: true });
        } else {
            return { canBack: false };
        }
    }
    openModal = (modalFunction, mode, dataPath, modalStyles) => {
        $('body').css('overflow-y', 'hidden');
        var temp = {
            modalFunction: modalFunction,
            mode: mode,
            dataPath: dataPath,
            isOpen: true,
            modalRef: React.createRef(),
            id: ehealth.guid.get(),
            modalStyles: modalStyles
        };
        var newState = immutable.push(this.state, 'modals', temp);
        var mIndex = newState.modals.length - 1;
        this.setState(newState);
        return mIndex;
    }
    closeModal = (index) => {
        $('body').css('overflow-y', 'auto');
        if (index == -1) {
            this.handleClose(this.state.modals.length - 1);
        }
        else
            this.handleClose(index);
    }
    scrollModalToBottom = (index, callback) => {
        let dom = $("#" + this.state.modals[index].id);
        dom.animate({ scrollTop: dom.height() }, 400);
    }
    scrollModalToTop = (index, callback) => {
        let dom = $("#" + this.state.modals[index].id);
        dom.animate({ scrollTop: 0 }, 400, () => {
            typeof callback == "function" && callback();
        });
    }

    scrollModalTo = (index, scrollTop, callback) => {
        let dom = $("#" + this.state.modals[index].id);
        dom.animate({ scrollTop: scrollTop }, 400, () => {
            typeof callback == "function" && callback();
        });
    }

    clearAllModal = (callback) => {
        this.state.modals.forEach(i => {
            i.isOpen = false;
        });
        this.setState({ modals: this.state.modals }, () => {
            setTimeout(() => {
                this.setState({ modals: [] }, callback);
            }, 300);
        });

    }
    handleClose = (index) => {
        var newState = immutable.set(this.state, 'modals.' + index + '.isOpen', false);
        this.setState(newState, () => {
            if (this.state.modals[index].modalFunction().otherProps) {
                typeof this.state.modals[index].modalFunction().otherProps.onCloseCallback == "function" && this.state.modals[index].modalFunction().otherProps.onCloseCallback();
            }
            var newState2 = immutable.del(this.state, 'modals.' + index);
            setTimeout(() => {
                this.setState(newState2);
            }, 300);
        });
    }
    shouldComponentUpdate(np, ns) {
        return true;
    }
    _getSlideDirection = function (dir) {
        if (dir == "down") return SlideDown;
        if (dir == "left") return SlideLeft;
        if (dir == "right") return SlideRight;
        if (dir == "up") return SlideUp;
    }

    render() {
        var { classes, readDataPath, ...other } = this.props;
        return (
            <React.Fragment>
                {this.state.modals.map((modalObj, index) => {
                    modalObj.key = modalObj.key ? modalObj.key : ehealth.guid.get();
                    var value = modalObj.modalFunction();
                    if (!value.otherProps) value.otherProps = {};
                    var slideD = value.otherProps.slideDirection
                        ? this._getSlideDirection(value.otherProps.slideDirection)
                        : SlideLeft;
                    var bodyStyle = {};
                    if (value.otherProps.bgColor) {
                        bodyStyle.backgroundColor = value.otherProps.bgColor;
                    };
                    if (value.otherProps.disablePadding) {
                        bodyStyle.padding = '0';
                    };
                    let paperClass = value.otherProps.freeSize ? "" : classes.paperFullWidth;
                    if (modalObj.modalStyles && modalObj.modalStyles.dialogStyles && modalObj.modalStyles.dialogStyles.paper){
                        paperClass = paperClass + " " + modalObj.modalStyles.dialogStyles.paper;
                    }
                    const isMobile = value.otherProps.forceMobile ? true : ehealth.isMobile;

                    var dataProps = this.props.readDataPath(modalObj.dataPath);
                    var bodyContent = React.cloneElement(value.body, { ...value.body.props, ...dataProps });
                    var buttonStyles = {};
                    if (value.otherProps.closeButtonStyle) {
                        buttonStyles = value.otherProps.closeButtonStyle;
                    }
                    if (isMobile){
                        buttonStyles.left = "0";
                    } else {
                        buttonStyles.right = "0";
                    };
                    return (
                        <Dialog
                            key={modalObj.key}
                            fullWidth={value.otherProps.freeSize ? false : true}
                            fullScreen={isMobile || value.otherProps.fullscreen}
                            maxWidth={false}
                            classes={{
                                ...modalObj.modalStyles.dialogStyles,
                                paper: paperClass,
                            }}
                            open={modalObj.isOpen}
                            TransitionComponent={slideD}
                            keepMounted
                            onClose={value.otherProps.disableOnClose ? null : () => this.handleClose(index)}
                            {...other}
                        >
                            <div id={modalObj.id} style={{ height: '100%', overflowY: 'auto' }}>
                                {
                                    (!value.title || value.otherProps.noTitle == true)
                                        ?
                                        !value.otherProps.disableBack
                                            ? <Button
                                                justIcon
                                                className={modalObj.modalStyles.modalCloseButton ? modalObj.modalStyles.modalCloseButton : classes.modalCloseButton}
                                                key="close"
                                                aria-label="Close"
                                                color="transparent"
                                                onClick={() => this.handleClose(index)}
                                                style={buttonStyles}
                                            >
                                                {
                                                    isMobile == true
                                                        ? <i style={{ fontSize: '1.4rem' }} className="fas fa-arrow-left"></i>
                                                        : <Close className={classes.modalClose} />
                                                }
                                            </Button>
                                            : null
                                        :
                                        <DialogTitle
                                            disableTypography
                                            classes={modalObj.modalStyles.dialogTitleStyles}
                                            className={classes.modalHeader}
                                        >
                                            {(!value.otherProps || !value.otherProps.disableBack)
                                                ?
                                                <Button
                                                    justIcon
                                                    className={modalObj.modalStyles.modalCloseButton ? modalObj.modalStyles.modalCloseButton : classes.modalCloseButton}
                                                    key="close"
                                                    aria-label="Close"
                                                    color="transparent"
                                                    onClick={() => this.handleClose(index)}
                                                    style={isMobile == false ? { right: "0", ...buttonStyles } : { left: "0", ...buttonStyles }}
                                                >
                                                    {
                                                        isMobile == true
                                                            ? <i style={{}} className="fas fa-chevron-left"></i>
                                                            : <Close className={classes.modalClose} />
                                                    }
                                                </Button>
                                                : null}
                                            <div style={{ textAlign: "center", fontSize: "1rem", fontWeight: 500, opacity: '.8' }} className={classes.modalTitle}>{value.title}</div>
                                        </DialogTitle>
                                }
                                <DialogContent
                                    classes={modalObj.modalStyles.dialogContentStyles}
                                    style={bodyStyle}
                                    className={classes.modalBody}
                                >
                                    {bodyContent}
                                </DialogContent>

                                {!value.footer ? null :
                                    <DialogActions className={classes.modalFooter} classes={modalObj.modalStyles.dialogActionStyles}>
                                        <React.Fragment>
                                            {!value.footer.cancel
                                                ? null
                                                : <Button color="secondary" width={'100px'} color="transparent" onClick={() => this.handleClose(index)}>
                                                    {value.footer.cancel}
                                                </Button>}
                                            {!value.footer.okay
                                                ? null
                                                : <Button color="primary" width={'100px'} color="transparent" onClick={() => {
                                                    typeof value.footer.okay.handle !== 'undefined' && value.footer.okay.handle();
                                                    this.handleClose(index);
                                                }}>
                                                    {value.footer.okay.title}
                                                </Button>}
                                            {value.footer.others && value.footer.others.length > 0
                                                ? value.footer.others.map(btn => {
                                                    return btn;
                                                })
                                                : null
                                            }
                                        </React.Fragment>
                                    </DialogActions>
                                }

                            </div>

                        </Dialog>
                    )
                })}

            </React.Fragment>
        )
    }

}
export default withStyles(modalStyle)(ModalManager)