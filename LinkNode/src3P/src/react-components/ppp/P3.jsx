import React from "react";
import { withStyles, Grid } from "@material-ui/core";
import BaseConsumer from 'BaseComponent/BaseConsumer';

import Card from "../../../i3Src/components/Card/Card";
import CardHeader from "../../../i3Src/components/Card/CardHeader";
import CardIcon from "../../../i3Src/components/Card/CardIcon";
import CardBody from "../../../i3Src/components/Card/CardBody";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
class P3 extends BaseConsumer {
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
              <CardIcon className={classes.cardIcon} style={{ backgroundColor: "#00A09D" }} >
              <Typography style={{ width: "100%" }}><h3 style={{float:"left"}}>P3. Performance Point:</h3> <h3 style={{float:"right"}}></h3></Typography>
              </CardIcon>

            </CardHeader>

            <CardBody >

              <ExpansionPanel className={classes.expansionPanel}>
                <ExpansionPanelSummary className={classes.expansionPanelSummary}
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ width: "100%" }}>
                    <p>Lương P3:</p>
                    <p>Bạn có 2 KPI cần đánh giá <ExpandMoreIcon style={{ float: "right" }} /></p> 
                  </Typography>


                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.expansionPanelDetails}>



                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>KPI khám bệnh</TableCell>
                        <TableCell >Điểm</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                          <TableCell >  <FormControlLabel
                            value="a"
                            control={<Radio />}
                            label="A. Khám trên 100 bệnh nhân"
                            labelPlacement="end"
                          /></TableCell>
                          <TableCell align="right">10</TableCell>

                        </TableRow>

                        <TableRow >

                          <TableCell >
                            <FormControlLabel
                              value="b"
                              control={<Radio />}
                              label="B. Khám từ 50 đến 100 bệnh nhân"
                              labelPlacement="end"
                            />
                          </TableCell>
                          <TableCell align="right">8</TableCell>

                        </TableRow>


                        <TableRow >

                          <TableCell >
                            <FormControlLabel
                              value="c"
                              control={<Radio />}
                              label="C. Khám dưới 50 bệnh nhân"
                              labelPlacement="end"
                            />
                          </TableCell>
                          <TableCell align="right">5</TableCell>

                        </TableRow>


                    </TableBody>
                    <TableHead>
                      <TableRow>
                        <TableCell>KPI viết báo khoa học</TableCell>
                        <TableCell >Điểm</TableCell>
                      </TableRow>
                    </TableHead>
                   
                    <TableBody>
                        <TableRow >
                          <TableCell >  <FormControlLabel
                            value="a"
                            control={<Radio />}
                            label="A. Viết 2 bài báo khoa học"
                            labelPlacement="end"
                          /></TableCell>
                          <TableCell align="right">10</TableCell>

                        </TableRow>

                        <TableRow >

                          <TableCell >
                            <FormControlLabel
                              value="b"
                              control={<Radio />}
                              label="B. Viết 1 bài báo khoa học"
                              labelPlacement="end"
                            />
                          </TableCell>
                          <TableCell align="right">8</TableCell>

                        </TableRow>


                        <TableRow >

                          <TableCell >
                            <FormControlLabel
                              value="c"
                              control={<Radio />}
                              label="C.Viết 0 bài báo khoa học "
                              labelPlacement="end"
                            />
                          </TableCell>
                          <TableCell align="right">5</TableCell>

                        </TableRow>


                    </TableBody>


                    <TableHead>
                      <TableRow>
                        <TableCell colSpan={2} align="right">Tổng số điểm: 8/10</TableCell>

                      </TableRow>

                  
         
                      <TableRow>
                        <TableCell colSpan={2} align="right">Lương dự kiến1 điểm = "100.000 VNĐ"</TableCell>
                      </TableRow>
                    </TableHead>
                  </Table>

{/* 
                  <Grid container>
                    <Grid item xas={12}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">KPI Khám bệnh</FormLabel>
                        <RadioGroup aria-label="position" name="position" row>
                          <FormControlLabel
                            value="a"
                            control={<Radio />}
                            label="A. Khám trên 100 bệnh nhân"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="b"
                            control={<Radio />}
                            label="B. Khám từ 50 đến 100 bệnh nhân"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="c"
                            control={<Radio />}
                            label="C. Khám dưới 50 bệnh nhân"
                            labelPlacement="end"
                          />
                        </RadioGroup>
                      </FormControl>


                    </Grid>
                    <Grid item xas={12}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">KPI Viết báo khoa học</FormLabel>
                        <RadioGroup aria-label="position" name="position" row>
                          <FormControlLabel
                            value="a"
                            control={<Radio />}
                            label="A. Viết trên 2 bài báo khoa học"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="b"
                            control={<Radio />}
                            label="B. Viết 1 bài báo khoa học"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="c"
                            control={<Radio />}
                            label="c. Viết không bài báo khoa học"
                            labelPlacement="end"
                          />
                        </RadioGroup>
                      </FormControl>

                    </Grid>

                  </Grid> */}






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


  stats: {
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
    float: "left",
    padding: "15px",
    marginRight: "15px",
    borderRadius: "3px",
    fontSize: "10px",
    width: "100%",
    justifyContent: "center",
    display: "flex"
  },
  grid: {
    margin: "20px 0px"
  },
  expansionPanel: {
    boxShadow: "none",
    width: "100%"
  },
  expansionPanelSummary: {
    padding: "0px"
  },
  expansionPanelDetails: {
    padding: "0px"
  },


}
export default withStyles(useStyles)(P3);










