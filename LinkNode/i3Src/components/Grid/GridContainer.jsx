import React from "react";

// @material-ui/core components
import {withStyles} from '../../../i3NodeModules/@material-ui/core';
import Grid from "../../../i3NodeModules/@material-ui/core/Grid";

const style = {
  grid: {
    margin: "0 -15px",
    width: "calc(100% + 30px)"
    // '&:before,&:after':{
    //   display: 'table',
    //   content: '" "',
    // },
    // '&:after':{
    //   clear: 'both',
    // }
  }
};

function GridContainer({ ...props }) {
  const { classes, children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridContainer);
