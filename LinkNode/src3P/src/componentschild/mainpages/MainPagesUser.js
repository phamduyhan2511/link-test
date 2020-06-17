import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Button from "../../components/CustomButtons/Button";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import avatar from "../../assets/img/faces/marc.jpg";

import React from "react";
import { withStyles, Grid } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import LabelImportant from '@material-ui/icons/LabelImportant';
import VisibilityIcon from '@material-ui/icons/Visibility';

const percent = 70
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
    color: grayColor[1],
    fontSize: "65%",
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
}

class MainPagesUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card profile>
              <CardAvatar profile style={{ marginTop: "-20px" }}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile >
                <Grid container justify="center" >

                  <Grid item>
                    <h5 className={classes.cardCategory}>Andrew</h5>
                    <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                  </Grid>
                  <Grid item>
                    <CreateIcon className={classes.createIcon} />
                  </Grid>
                </Grid>


                <Grid container>
                  <Grid item xs >
                    <h3 style={{ float: "left" }} >My Task</h3>
                  </Grid>
                  <Grid item xs >
                    <Button color="rose" round style={{ float: "right", marginTop: "15px" }} > <CalendarTodayIcon /></Button>
                  </Grid>
                </Grid>



                <Grid container >
                  <Grid item xs={1} >
                    <LabelImportant fontSize="small" />
                  </Grid>
                  <Grid item xs={11} >
                    <Grid container>
                      <Grid item>
                        <p>Bạn có 7 nhân viên cần đánh giá </p>
                      </Grid>
                      <Grid item style={{ marginLeft: "10px" }}>
                        <CreateIcon fontSize="small" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>


                <Grid container >
                  <Grid item xs={1} >
                    <LabelImportant fontSize="small" />
                  </Grid>
                  <Grid item xs={11} >
                    <Grid container>
                      <Grid item>
                        <p >Kế hoạch đạt kiến thức của bạn (P2)</p>
                      </Grid>
                      <Grid item style={{ marginLeft: "10px" }}>
                        <CreateIcon fontSize="small" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid container >
                  <Grid item xs={1} >
                    <LabelImportant fontSize="small" />
                  </Grid>
                  <Grid item xs={11} >
                    <Grid container>
                      <Grid item>
                        <p>Tiến độ KPI của bạn (P3)</p>
                      </Grid>
                      <Grid item style={{ marginLeft: "10px" }}>
                        <VisibilityIcon fontSize="small" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} style={{ margin: "0px 30px 0px 30px" }}>

                      <div style={{ backgroundColor: "white", width: '100%', height: "10px", alignContent:"center",border:"1px solid",borderRadius:"5px" }}>
                        <div style={{ backgroundColor: "#FF007F", width: `${percent}%`, height: "100%" }}>
                        </div>
                      </div>


                  </Grid>
                </Grid>

              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </React.Fragment >
    );
  }
}

const useStyles =
{
  cardTitle,
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
    "& small": {
      fontSize: "80%",
      fontWeight: "400"
    }
  },
  cardCategory: {
    marginTop: "10px",
    color: grayColor[0] + " !important",
    textAlign: "center"
  },
  description: {
    color: grayColor[0]
  },
  updateProfileButton: {
    float: "right"
  },
  alignLeft: {
    textAlign: "left"
  },
  kpiPercent: {
    marginTop: "15px"
  },
  createIcon: {
    marginTop: "15px",
    fontSize: "15px",
    color: grayColor[0] + " !important",
  }


}
export default withStyles(useStyles)(MainPagesUser);