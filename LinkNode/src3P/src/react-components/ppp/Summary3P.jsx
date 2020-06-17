import React from "react";
import { withStyles, Grid } from "@material-ui/core";
import BaseConsumer from 'BaseComponent/BaseConsumer';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import Color from "../../general/Color"



class Summary3P extends BaseConsumer {
  constructor(props) {
    super(props);
  }

  consumerContent() {
    const { classes, data } = this.props
    return (
      <React.Fragment>

        <table style={{ width: "100%" }}>
          <tbody>
            <tr>

              <td className={classes.fab}>
               <b style={{fontSize:"2rem" }}>91</b><br/>Position
                <center>

                  <div style={{ width: "40px",height:"5px",marginTop:"5px", backgroundColor: Color.p1 }}></div>
                  </center>
              </td>


              <td className={classes.fab}>
               <b style={{fontSize:"2rem" }}>31</b><br/>Person
                <center>

                  <div style={{ width: "40px",height:"5px",marginTop:"5px", backgroundColor:  Color.p2 }}></div>
                  </center>
              </td>



              <td className={classes.fab}>
               <b style={{fontSize:"2rem" }}>19</b><br/>Performance
                <center>

                  <div style={{ width: "40px",height:"5px",marginTop:"5px", backgroundColor:  Color.p3}}></div>
                  </center>
              </td>
            </tr>
          </tbody>
        </table>

      </React.Fragment >
    );
  }
}

const useStyles =
{
  fab: {
    textAlign: "center",
    width:"33.33333%"
  },

  extendedIcon: {
    marginRight: "10px",
  },
}
export default withStyles(useStyles)(Summary3P);










