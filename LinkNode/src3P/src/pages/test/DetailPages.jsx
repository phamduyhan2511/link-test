import React from "react";
import ReactDOM from 'react-dom';
import { withStyles } from "@material-ui/core";
// import MainPagesUser from "../componentschild/mainpages/MainPagesUser";
import P1Detail from "../../componentschild/detailPage/P1Detail";
import {BasePage} from 'BaseComponent/BasePage'
import P2Detail from "../../componentschild/detailPage/P2Detail";

class DetailPages extends BasePage {
  constructor(props) {
    super(props);
    this.state = {}
  }
  childrenRender() {
    const { classes } = this.props

    return (
      <React.Fragment>
    <P2Detail/>
      </React.Fragment >
    );
  }
}

const useStyles =
{
 
}
window.renderPage = (dom) => {
    ReactDOM.render(React.createElement(withStyles(useStyles)(DetailPages)), dom);
}

