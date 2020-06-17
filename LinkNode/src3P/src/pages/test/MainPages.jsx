import React from "react";
import ReactDOM from 'react-dom';
import { withStyles } from "@material-ui/core";
import MainPagesUser from "../../componentschild/mainpages/MainPagesUser";
import MainPages3P from "../../componentschild/mainpages/MainPages3P";
import MainPagesCharts from "../../componentschild/mainpages/MainPagesCharts";
class MainPages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <div className={classes.mainPagesWrapper}>
                    <MainPagesUser />
                    <MainPages3P />
                    <MainPagesCharts />
                </div>
            </React.Fragment >
        );
    }
}
const useStyles =
{
    mainPagesWrapper: {
        padding: "10px"
    }
}
window.renderPage = (dom) => {
    ReactDOM.render(React.createElement(withStyles(useStyles)(MainPages)), dom);
}
// export default withStyles(useStyles)(MainPages);