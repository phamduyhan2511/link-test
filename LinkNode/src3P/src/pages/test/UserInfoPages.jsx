import React from "react";
import ReactDOM from 'react-dom';
import { withStyles } from "@material-ui/core";
import UserInfoPagesForm from "../../componentschild/userinfopages/UserInfoPagesForm";


class UserInfoPages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo:[
                {name:"Nguyen Van A ", code:100, dob: "1/1/1996",position:"Bác sĩ",room:"Phẫu thuật",faculty:"Tim mạch",knowlegdeName:"Toeic 725",knowledgeType:"Bằng cấp"  }
            ]
        }
    }
    render() {
        const { classes } = this.props

        return (
            <React.Fragment>
                <UserInfoPagesForm userInfo={this.state.userInfo}  />                
            </React.Fragment >
        );
    }
}

const useStyles =
{
   
}
window.renderPage = (dom) => {
    ReactDOM.render(React.createElement(withStyles(useStyles)(UserInfoPages)), dom);
}
// export default withStyles(useStyles)(UserInfoPages);