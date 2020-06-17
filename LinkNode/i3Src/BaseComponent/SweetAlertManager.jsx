import React from '../../i3NodeModules/react';
// material-ui components
import withStyles from "../../i3NodeModules/@material-ui/core/styles/withStyles";
import SweetAlert from "../../i3NodeModules/react-bootstrap-sweetalert";
import sweetAlertStyle from "../assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
class SweetAlertManager extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            alert: null
        }

    }
    hide = () => {
        this.setState({
            alert: null
        });
    }
    sweetAlert = (title, subtitle, mode, callback) => {
        console.log(title, subtitle, mode, callback);
        let X;
        if (mode == "success"){
            X = { 
                alert: (
                    <SweetAlert
                        success
                        // style={{ display: "block", marginTop: "-100px" }}
                        title={title}
                        onConfirm={() => {
                            this.hide();
                            typeof callback == 'function' && callback();
                        }}
                        onCancel={() => this.hide()}
                        confirmBtnCssClass={
                            this.props.classes.button + " " + this.props.classes.success
                        }
                    >
                        <div style={{fontSize: '15px', fontWeight: '400', color: '#464646'}}>
                            {subtitle}
                        </div>
                    </SweetAlert>
                )
            }
        } else {
            X = { 
                alert: (
                    <SweetAlert
                        danger
                        style={{ display: "block", marginTop: "-100px" }}
                        title={title}
                        onConfirm={() => {
                            this.hide();
                            typeof callback == 'function' && callback();
                        }}
                        onCancel={() => this.hide()}
                        confirmBtnCssClass={
                            this.props.classes.button + " " + this.props.classes.danger
                        }
                    >
                        <div style={{fontSize: '15px', fontWeight: '400', color: '#464646'}}>
                            {subtitle}
                        </div>
                    </SweetAlert>
                )
            }
        }
        this.setState(X)
    }
    render() {
        // var {classes, ...other} = this.props;
        return (
            <React.Fragment>
                <div style={{zIndex: '2000'}}>
                    {this.state.alert}
                </div>
            </React.Fragment>
        )
    }

}
export default withStyles(sweetAlertStyle)(SweetAlertManager)