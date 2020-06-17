import React from "react";
import { withStyles, Grid } from "@material-ui/core";
import BaseConsumer from 'BaseComponent/BaseConsumer';

import Card from "../../../i3Src/components/Card/Card";
import CardHeader from "../../../i3Src/components/Card/CardHeader";
import CardIcon from "../../../i3Src/components/Card/CardIcon";
import CardBody from "../../../i3Src/components/Card/CardBody";

import PersonPinIcon from '@material-ui/icons/PersonPin';


import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const grayColor = [
  "#999",
  "#777",
  "#3C4858",
  "#AAAAAA",
  "#D2D2D2",
  "#DDD",
  "#555555",
  "#333",
  "#eee",
  "#ccc",
  "#e4e4e4",
  "#E5E5E5",
  "#f9f9f9",
  "#f5f5f5",
  "#495057",
  "#e7e7e7",
  "#212121",
  "#c8c8c8",
  "#505050"
];
const title = {
  color: grayColor[2],
  textDecoration: "none",
  fontWeight: "300",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  "& small": {
    // color: grayColor[1],
    fontSize: "80%",
    fontWeight: "400",
    lineHeight: "1"
  }
};
const cardTitle = {
  ...title,
  marginTop: "0",
  marginBottom: "3px",
  minHeight: "auto",
  "& a": {
    ...title,
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto"
  }
};
class P1 extends BaseConsumer {
  constructor(props) {
    super(props);
  }

  consumerContent() {
    const { classes, data } = this.props
    return (
      <React.Fragment>
        <Grid className={classes.grid} >
          <Card  >



            <CardHeader stats icon>
              <CardIcon className={classes.cardIcon} style={{ backgroundColor: "#7653E8" }} >
                <Typography style={{ width: "100%" }}><h3 style={{ float: "left" }}>P1. Position Point:</h3> <h3 style={{ float: "right" }}>91.6</h3></Typography>
              </CardIcon>

            </CardHeader>

            <CardBody >
              <ExpansionPanel className={classes.expansionPanel}>
                <ExpansionPanelSummary className={classes.expansionPanelSummary}
                 expandIcon={<ExpandMoreIcon style={{ float: "right" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ width: "100%" }}>
                    <b>Bác sĩ, Khoa: Nội - Tổng quát</b>
                    <p>Thời gian làm việc tại vị trí: 80%</p>
                    <p>Lương P1: 6.240.000 VNĐ </p>
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.expansionPanelDetails}>


                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Tác động của vị trí</TableCell>
                        <TableCell align="right">Điểm</TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>

                      <TableRow>
                        <TableCell    >
                          <p>Hiệu quả chuyên môn:</p>
                          <p>Hiệu quả vận hành:</p>
                          <p>Rủi ro pháp lý:</p>
                          <p>Sự phát triển:</p>
                        </TableCell>


                        <TableCell align="right" >
                          <p>3.2 </p>
                          <p>1.6 </p>
                          <p>2 </p>
                          <p>1 </p>

                        </TableCell>
                      </TableRow>

                    </TableBody>


                    <TableHead>
                      <TableRow>
                        <TableCell colSpan={2} align="right">Tổng số điểm: 7.8</TableCell>

                      </TableRow>

                      <TableRow >
                        <TableCell colSpan={2} align="right">Hệ số vị trí: 10</TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell colSpan={2} align="right">Điểm vị trí: 78</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={2} align="right">Lương dự kiến 1 điểm = "100.000 VNĐ"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={2} align="right">Lương 100% P1  = "7.800.000 VNĐ"</TableCell>
                      </TableRow>
                    </TableHead>
                  </Table>




                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel className={classes.expansionPanel}>
                <ExpansionPanelSummary className={classes.expansionPanelSummary}
                 expandIcon={<ExpandMoreIcon style={{ float: "right" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ width: "100%" }}>
                    <b>Thu ngân, Khoa: Nội - Tài chính</b>
                    <p>Thời gian làm việc tại vị trí: 20%</p>
                    <p>Lương P1: 272.000 VNĐ </p>
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.expansionPanelDetails}>


                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Tác động của vị trí</TableCell>
                        <TableCell align="right">Điểm</TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell    >
                          <p>Hiệu quả chuyên môn:</p>
                          <p>Hiệu quả vận hành:</p>
                          <p>Rủi ro pháp lý:</p>
                          <p>Sự phát triển:</p>
                        </TableCell>


                        <TableCell align="right" >
                          <p>0 </p>
                          <p>3.2 </p>
                          <p>2.4 </p>
                          <p>1.2 </p>

                        </TableCell>
                      </TableRow>


                    </TableBody>


                    <TableHead>
                      <TableRow>
                        <TableCell colSpan={2} align="right">Tổng số điểm: 6.8</TableCell>

                      </TableRow>

                      <TableRow >
                        <TableCell colSpan={2} align="right">Hệ số vị trí: 2</TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell colSpan={2} align="right">Điểm vị trí: 13.6</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={2} align="right">Lương dự kiến 1 điểm = "100.000 VNĐ"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={2} align="right">Lương 100% P1  = "1.360.000 VNĐ"</TableCell>
                      </TableRow>
                    </TableHead>
                  </Table>




                </ExpansionPanelDetails>
              </ExpansionPanel>

            </CardBody>
          </Card>
        </Grid>






      </React.Fragment >
    );
  }
}

const useStyles =
{
  roseColor: {
    color: " #FF007F"
  },
  cardCategory: {
    color: grayColor[0],
    fontSize: "14px",
    paddingTop: "10px",
    marginBottom: "0",
    marginTop: "0",
    margin: "0"
  },
  cardTitle: {
    ...cardTitle,
    marginTop: "0px",
    marginBottom: "3px"
  },
  stats: {

    color: grayColor[0],
    fontSize: "12px",
    lineHeight: "22px",
    display: "inline-flex",
    "& svg": {
      position: "relative",
      top: "4px",
      width: "16px",
      height: "16px",
      marginRight: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "4px",
      fontSize: "16px",
      marginRight: "3px"
    }
  },
  cardIcon: {
    // float: "left",
    padding: "15px",
    marginRight: "15px",
    borderRadius: "3px",
    fontSize: "10px",
    width: "100%",
    // justifyContent: "center",
    display: "flex"
  },
  grid: {
    margin: "20px 0px"
  },
  expansionPanel: {
    boxShadow: "none",
    width: "100%",
    padding: "0px"
  },
  expansionPanelSummary: {
    padding: "0px"
  },
  expansionPanelDetails: {
    padding: "0px"
  }



}
export default withStyles(useStyles)(P1);










