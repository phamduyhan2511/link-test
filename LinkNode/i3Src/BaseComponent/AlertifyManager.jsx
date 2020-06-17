import React from '../../i3NodeModules/react';
import Snackbar from '../components/Snackbar/Snackbar.jsx';
import withStyles from "../../i3NodeModules/@material-ui/core/styles/withStyles";
import ehealth from '../general/i3app.js';


class AlertifyManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],

        }
        this.addNewAlertify = {
            warning: (content, timeout, placement) => {
                this.state.notifications.unshift(
                    {
                        content: content,
                        color: "warning",
                        isOpen: false,
                        placement: placement,
                        timeout: timeout
                    }
                )
                this.setState({ notifications: this.state.notifications }, this._showNotification())
            },
            success: (content, timeout, placement) => {
                this.state.notifications.unshift(
                    {
                        content: content,
                        color: "success",
                        isOpen: false,
                        placement: placement,
                        timeout: timeout
                    }
                )
                this.setState({ notifications: this.state.notifications }, this._showNotification())
            },
            error: (content, timeout, placement) => {
                this.state.notifications.unshift(
                    {
                        content: content,
                        color: "danger",
                        isOpen: false,
                        placement: placement,
                        timeout: timeout
                    }
                )
                this.setState({ notifications: this.state.notifications }, this._showNotification())
            }

        }
        window.closeAllAlert = this.closeAllAlert;
    };
    _closeAll = () => {
        this.setState({ notifications: this.state.notifications.map(i=>({...i, isOpen: false})) }, ()=>{
            setTimeout(()=>{
                this.setState({ notifications:  []});
            }, 2000)
        });
    }
    closeAllAlert = () => {
        this._closeAll();
    }


    _showNotification = () => {
        this.state.notifications[0].isOpen = true;
        this.setState({ notifications: this.state.notifications });
        setTimeout(
            function () {
                if (this.state.notifications.length > 0) {
                    this.state.notifications[this.state.notifications.length - 1].isOpen = false;
                    this.setState({ notifications: this.state.notifications }, () => { this.state.notifications.splice(this.state.notifications.length - 1, 1); });
                }
            }.bind(this),
            this.state.notifications[this.state.notifications.length - 1].timeout === 0
            ? 99999999
            : this.state.notifications[this.state.notifications.length - 1].timeout == undefined
                ? 4000
                : this.state.notifications[this.state.notifications.length - 1].timeout
        );
    }

    render() {
        const { classes } = this.props;
        const isMobile = ehealth.isMobile;
        var topCount = 0;
        var bottomCount = 0;
        return (
            <React.Fragment>

                {this.state.notifications.map((value, index) => {
                    value.key = value.key ? value.key : Math.random().toString(36).substring(2);
                    let plm;
                    if (value.placement){
                        plm = value.placement;
                    } else {
                        let TOP = { vertical: "top", horizontal: "center" };
                        let BOT = { vertical: "bottom", horizontal: "right" };
                        plm = ehealth.isMobile ? TOP : BOT;
                    };
                    let byTopOrBot = plm.vertical;
                    let offset; 
                    if (byTopOrBot == "top"){
                        offset = `${74 * topCount + 40}px`;
                        topCount++;
                    } else if (byTopOrBot == "bottom"){
                        offset = `${74 * bottomCount + 40}px`;
                        bottomCount++;
                    }
                    return (
                        <div
                            key={value.key}
                            style={{ 
                                top: byTopOrBot == "top" ? offset : 'auto', 
                                bottom: byTopOrBot == "bottom" ? offset : 'auto', 
                                position: "fixed", 
                                width: isMobile ? '100%' : 'auto', 
                                right: isMobile ? 'auto' : '20px', 
                                zIndex: '9999' 
                            }}
                            className={classes.snackWrapper}
                        >
                            <Snackbar
                                anchorOrigin={plm}
                                color={value.color}
                                message={value.content}
                                open={value.isOpen}
                                closeNotification={() => {
                                    this.state.notifications[index].isOpen = false;
                                    this.state.notifications.splice(index, 1);
                                    this.setState({ notifications: this.state.notifications });
                                }}
                                close
                                classes={{
                                    snackbarRoot: classes.snackbarRoot
                                }}
                            />

                        </div>
                    );
                })}

            </React.Fragment>
        )
    }
}

const alertifyManagerStyles = {
    snackbarRoot: {
        position: 'relative',
        top: '0',
        left:'0',
    },
    snackWrapper: {
        // "& div:first-child": {
        //     position: "relative !important"
        // }
    }
}

export default withStyles(alertifyManagerStyles)(AlertifyManager);