import React from "react";
import PropTypes from "prop-types";

// mterial-ui components
import {withStyles} from '../../../i3NodeModules/@material-ui/core';

const style = {
  clearfix: {
    "&:after,&:before": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  }
};

function Clearfix({ ...props }) {
  const { classes } = props;
  return <div className={classes.clearfix} />;
}

Clearfix.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(Clearfix);
