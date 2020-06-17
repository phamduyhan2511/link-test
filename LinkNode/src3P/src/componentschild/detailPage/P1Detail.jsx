import React from "react";
import BaseConsumer from "BaseComponent/BaseConsumer"
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import { withStyles, Paper, Grid } from "@material-ui/core";
import CardBody from "../../components/Card/CardBody.js";

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

class P1Detail extends BaseConsumer {
    constructor(props) {
        super(props);
        this.state = {
            detail: [
                { name: "Hệ số Vị trí", value: 0.9 },
                { name: "Hiệu quả chuyên môn", value: 8 },
                { name: "Trọng số chuyên môn", value: 0.7 },
                { name: "Hiệu quả vận hành", value: 5 },
                { name: "Trọng số vận hành", value: 0.9 },
                { name: "Rủi ro pháp lý", value: 10 },
                { name: "Trọng số pháp lý", value: 1 },
                { name: "Phát triển hệ thống", value: 6 },
                { name: "Trọng số phát triển", value: 0.5 },
                { name: "Số ngày làm", value: 20 },
            ]
        }
    }
    consumerContent() {
        const { classes } = this.props
        const date = new Date().getDate(); const month = new Date().getMonth(); const year = new Date().getFullYear();
        return (
            <React.Fragment>
                <GridContainer className={classes.P1Detail}>
                    <GridItem className={classes.card} xs={12} sm={12} md={12} lg={12}>
                        <Card>
                            <Paper>
                                <CardHeader color="warning" stats icon>
                                    <CardIcon color="warning">
                                        <h3>P1</h3>
                                    </CardIcon>
                                    <p className={classes.cardCategory}>Khoa Răng Hàm Mặt</p>
                                    <h3 className={classes.cardTitle}>
                                        Bác Sĩ
                                    </h3>
                                    <small style={{ color: "black" }}>{date + '/' + month + '/' + year}</small>
                                    <Grid className={classes.totalSalary}>
                                        Lương dự kiến: 4.000.000 đ
                                    </Grid>
                                </CardHeader>
                                <CardBody>
                                    {this.state.detail.map((detail, index) => {
                                        return (
                                            <Grid container className={classes.divider} key={"detail" + index}>
                                                <Grid item xs={8} sm={8} md={8} >{detail.name + ":"}</Grid>
                                                <Grid item xs={4} sm={4} md={4} >{detail.value}</Grid>
                                            </Grid >
                                        )
                                    })}
                                    <Grid container className={classes.totalSalaryPosition}>
                                        <Grid item xs={8} sm={8} md={8} >Lương tại vị trí:</Grid>
                                        <Grid item xs={4} sm={4} md={4} >5.000.000 đ</Grid>
                                    </Grid>
                                </CardBody>
                            </Paper>
                        </Card>
                    </GridItem>
                </GridContainer>

            </React.Fragment >
        );
    }
}

const useStyles =
{
    P1Detail: {
        width: "calc(100% )",
        margin: "0 0px"
    },
    card:
    {
        padding: "0 0px !important"
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
        marginBottom: "3px",
        fontSize: "20px",
        fontWeight: "bold"
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
    divider: {
        borderBottom: "1px solid #80808054",
        marginBottom: "30px"
    },
    totalSalaryPosition: {
        color: "#000480",
        fontWeight: "bold"
    },
    totalSalary: {
        color: "green",
        fontWeight: "bold"
    }

}

export default withStyles(useStyles)(P1Detail);