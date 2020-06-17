import React from "react";
import ReactDOM from 'react-dom';
import { withStyles } from "@material-ui/core";
import LoginPagesForm from "../../componentschild/loginpages/LoginPagesForm";
class LoginPages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <LoginPagesForm />
            </React.Fragment >
        );
    }
}

const useStyles = {}

window.renderPage = (dom) => {
    ReactDOM.render(React.createElement(withStyles(useStyles)(LoginPages)), dom);
}
// export default withStyles(useStyles)(LoginPages);