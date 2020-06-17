import React from "react";
import Warning from "@material-ui/icons/Warning";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Primary from "../../components/Typography/Primary.js";

import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardFooter from "../../components/Card/CardFooter.js";
import { withStyles } from "@material-ui/core";

import PersonPinIcon from '@material-ui/icons/PersonPin';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InfoIcon from '@material-ui/icons/Info';
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
};

class MainPages3P extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        <GridContainer style={{}}>


          <GridItem xs={12} sm={4} md={4} lg={4}>
            <Card >
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <h2>P1</h2>
                </CardIcon>
                {/* <p className={classes.cardCategory}>Vị trí - Phòng khoa</p> */}

                <h3 className={classes.cardTitle}>
                  <small>   Bác sĩ</small>
                </h3>
                <h3 className={classes.cardTitle}>
                  <small>Phòng: Phẫu thuật - Khoa: Tim</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div >
                  <PersonPinIcon  className={classes.roseColor}/>            
                  <a href="#pablo" onClick={e => e.preventDefault()} className={classes.roseColor}>P1: Lương theo vị trí  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>



          <GridItem xs={12} sm={4} md={4} lg={4}>
            <Card  >
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                <h2>P2</h2>

                </CardIcon>
                {/* <p className={classes.cardCategory}>Tên kiến thức - Loại</p> */}

                <h3 className={classes.cardTitle}>
                  <small>Toeic 900 -  Bằng cấp</small>
                </h3>
                <h3 className={classes.cardTitle}>
                  <small> Khám tim - KN chuyên môn</small>
                </h3>
                <h3 className={classes.cardTitle}>
                  <small> Giao tiếp tốt - KN mềm</small>
                </h3>
              </CardHeader>
              <CardFooter stats  >
                <div className={classes.stats} >
                  <ImportContactsIcon className={classes.roseColor} />
                  <a href="#pablo" onClick={e => e.preventDefault()} className={classes.roseColor} >P2: Lương theo kiến thức</a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>




          <GridItem xs={12} sm={4} md={4} lg={4}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                <h2>P3</h2>

                </CardIcon>
                {/* <p className={classes.cardCategory}>Tên KPI</p> */}
                <h3 className={classes.cardTitle}>
                  <small>Khám 100 bệnh nhân</small>
                </h3>
              </CardHeader>



              <CardFooter stats>
                <div className={classes.stats}>
                  <AssignmentIcon className={classes.roseColor} />
                  <a href="#pablo" onClick={e => e.preventDefault()} className={classes.roseColor}>P3: Lương theo KPI</a>
                </div>
              </CardFooter>


            </Card>
          </GridItem>
        </GridContainer>

      </React.Fragment >
    );
  }
}

const useStyles =
{roseColor:{
color:" #FF007F"
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
}
export default withStyles(useStyles)(MainPages3P);