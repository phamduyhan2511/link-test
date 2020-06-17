import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import {withStyles} from '../../../i3NodeModules/@material-ui/core';

import typographyStyle from "typographyStyle.jsx";

function Danger({ ...props }) {
  const { classes, children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.dangerText}>
      {children}
    </div>
  );
}

Danger.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Danger);
