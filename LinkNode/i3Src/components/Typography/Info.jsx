import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import {withStyles} from '../../../i3NodeModules/@material-ui/core';

import typographyStyle from "typographyStyle.jsx";

function Info({ ...props }) {
  const { classes, children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.infoText}>
      {children}
    </div>
  );
}

Info.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Info);
