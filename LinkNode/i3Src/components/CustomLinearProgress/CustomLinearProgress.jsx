import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import {withStyles} from '../../../i3NodeModules/@material-ui/core';
import LinearProgress from "../../../i3NodeModules/@material-ui/core/LinearProgress";

import customLinearProgressStyle from "customLinearProgressStyle.jsx";

function CustomLinearProgress({ ...props }) {
  const { classes, color, ...rest } = props;
  return (
    <LinearProgress
      {...rest}
      classes={{
        root: classes.root + " " + classes[color + "Background"],
        bar: classes.bar + " " + classes[color]
      }}
    />
  );
}

CustomLinearProgress.defaultProps = {
  color: "gray"
};

CustomLinearProgress.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ])
};

export default withStyles(customLinearProgressStyle)(CustomLinearProgress);
