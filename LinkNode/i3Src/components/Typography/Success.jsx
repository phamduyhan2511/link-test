import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import {withStyles} from '../../../i3NodeModules/@material-ui/core';

import typographyStyle from "typographyStyle.jsx";

function Success({ ...props }) {
  const { classes, children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.successText}>
      {children}
    </div>
  );
}

Success.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Success);
