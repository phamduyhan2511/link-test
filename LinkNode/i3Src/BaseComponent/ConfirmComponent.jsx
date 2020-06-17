import DialogContentText from '../../i3NodeModules/@material-ui/core/DialogContentText';
import Dialog from "../../i3NodeModules/@material-ui/core/Dialog";
import DialogActions from "../../i3NodeModules/@material-ui/core/DialogActions";
import DialogContent from "../../i3NodeModules/@material-ui/core/DialogContent";
import Slide from "../../i3NodeModules/@material-ui/core/Slide";
// material-ui components
import withStyles from "../../i3NodeModules/@material-ui/core/styles/withStyles";
const immutable = require('../../i3NodeModules/object-path-immutable');
import React from '../../i3NodeModules/react';
import modalStyle from "../assets/jss/material-dashboard-pro-react/modalStyle.jsx";
// core components
import Button from "../components/CustomButtons/Button.jsx";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
class ConfirmComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            content: null
        }
        this._body = null;
    }

    alertifyConfirm = (body, footer) => {
        var newContent = immutable.set(this.state.content, '', { body: body, footer: footer });
        this.setState({ open: true, content: newContent });
    }

    _handleOkay = () => {
        this.setState({ open: false }, () => {
            if (typeof this.state.content.footer.okay.handle == 'function') {
                this.state.content.footer.okay.handle();
            }
        })
    }

    _handleCancel = () => {
        this.setState({ open: false }, () => {
            if (typeof this.state.content.footer.cancel.handle == 'function') {
                this.state.content.footer.cancel.handle();
            }
        })
    }


    render() {
        var { classes, ...other } = this.props;
        var { content, open } = this.state;
        if (!this.state.content) {
            return null;
        }
        //console.log(this.state.content);
        var bodyStyle = {
            // margin: ' 10px 0',
            fontSize: '13pt',
            fontWeight: '400',
            borderDarius: '5px'
        }
        let paperClass = classes.modal;
        //console.log(content.footer.cancel);
        console.log(content);
        return (
            <Dialog
                open={open}
                onClose={this._handleCancel}
                fullWidth={true}
                TransitionComponent={Transition}
                keepMounted
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                classes={{
                    paper: paperClass
                }}
                style={{zIndex: 1350}}
            >
                {/* <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle> */}
                <DialogContent
                    style={bodyStyle}
                    className={classes.modalBody}>
                    {typeof content.body == "string"
                        ? <DialogContentText style={{color: "#464646"}} id="alert-dialog-slide-description">
                            {content.body}
                        </DialogContentText>
                        : content.body}
                </DialogContent>
                <DialogActions className={classes.modalFooter}>
                    <Button onClick={this._handleCancel} width={'100px'} color="secondary" size="sm">
                        {content.footer.cancel
                            ? content.footer.cancel.title
                            : 'Disagree'
                        }
                    </Button>
                    <Button onClick={this._handleOkay} width={'100px'} color="primary" size="sm">
                        {content.footer.okay
                            ? content.footer.okay.title
                            : 'Agree'
                        }
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default withStyles(modalStyle)(ConfirmComponent);