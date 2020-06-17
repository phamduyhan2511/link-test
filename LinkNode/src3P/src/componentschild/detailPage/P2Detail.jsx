import React from "react";
import BaseConsumer from "BaseComponent/BaseConsumer"
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import SwipeableViews from 'react-swipeable-views';
import { withStyles, Paper, Grid, Typography, Box, Tab, Tabs, AppBar, Button } from "@material-ui/core";
import CardBody from "../../components/Card/CardBody.js";
import moment from 'moment'
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

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

class P1Detail extends BaseConsumer {
    constructor(props) {
        super(props);
        this.state = {
            tabsValue: 0,
            knowledge: [
                { name: "Bác sĩ đa khoa", type: 0, value: 9 },
                { name: "Bác sĩ tâm lí", type: 0, value: 8 },
                { name: "Giao tiếp", type: 1, value: 6 },
                { name: "Thuyết trình", type: 2, value: 5 },
                { name: "Chẩn bệnh", type: 0, value: 9 },
                { name: "Anh Văn Giao Tiếp", type: 1, value: 5 },
                { name: "Làm việc nhóm", type: 2, value: 10 },
            ]
        }
    }



    _handleChange = (event, newValue) => {
        this.setState({ tabsValue: newValue });
    }

    _handleChangeIndex = index => {
        this.setState({ tabsValue: index });
    };

    _openModal = (index) =>{
        this.openModal(()=>{
            if (index == 2)
            return({
                title: "Thêm bằng cấp mới",
                body: <div>Nội dung</div>, // nội dung
                otherProps: {
                    // một số các option cho modal, có thể có hoặc ko 
                    slideDirection: "left", // or "right", "down", "up", phía xuất hiện và biến mất của modal
                    freeSize: false // false, nếu true thì kích thước modal sẽ tuỳ thuộc vào body
                    // và một số options khác 
                }
            })
        });
    }

    consumerContent() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <GridContainer className={classes.P1Detail}>
                    <GridItem className={classes.card} xs={12} sm={12} md={12} lg={12}>
                        <Card>
                            <Paper>
                                <CardHeader color="success" stats icon>
                                    <CardIcon color="success">
                                        <h3>P2</h3>
                                    </CardIcon>
                                    <h3 className={classes.cardTitle}>Kiến thức - Kĩ năng</h3>
                                    <small style={{ color: "black" }}>{moment(new Date()).format("DD/MM/YYYY")}</small>
                                    <Grid className={classes.totalSalaryPosition}>
                                        Tổng điểm: 60/75
                                    </Grid>
                                    <Grid className={classes.totalSalary}>
                                        Lương dự kiến: 4.000.000 đ
                                    </Grid>
                                    
                                </CardHeader>
                                <CardBody className={classes.root}>
                                    <div >
                                        <AppBar position="static" color="default">
                                            <Tabs
                                                value={this.state.tabsValue}
                                                onChange={this._handleChange}
                                                indicatorColor="primary"
                                                textColor="primary"
                                                variant="fullWidth"
                                                aria-label="full width tabs example"
                                            >
                                                <Tab label="Bằng cấp" {...a11yProps(0)} />
                                                <Tab label="Kĩ năng chuyên môn" {...a11yProps(1)} />
                                                <Tab label="Kĩ năng mềm" {...a11yProps(2)} />
                                            </Tabs>
                                        </AppBar>
                                        <SwipeableViews
                                            index={this.state.tabsValue}
                                            onChangeIndex={this._handleChangeIndex}
                                        >
                                            <TabPanel value={this.state.tabsValue} index={0}>
                                                <Grid container className={classes.label}>
                                                    <Grid item xs={8} sm={8} md={8} >Tên</Grid>
                                                    <Grid item xs={4} sm={4} md={4} >Điểm tương ứng</Grid>
                                                </Grid >
                                                {this.state.knowledge.map((knowledge, index) => {
                                                    if (knowledge.type == 0)
                                                        return (
                                                            <Grid container className={classes.divider} key={"knowledge" + index}>
                                                                <Grid item xs={8} sm={8} md={8} >{knowledge.name + ":"}</Grid>
                                                                <Grid item xs={4} sm={4} md={4} >{knowledge.value + "/10"}</Grid>
                                                            </Grid >
                                                        )
                                                })}
                                                <Button variant="contained" color="primary" className={classes.button} >
                                                    Thêm mới
                                                </Button>
                                            </TabPanel>
                                            <TabPanel value={this.state.tabsValue} index={1} >
                                                <Grid container className={classes.label}>
                                                    <Grid item xs={8} sm={8} md={8} >Tên</Grid>
                                                    <Grid item xs={4} sm={4} md={4} >Điểm tương ứng</Grid>
                                                </Grid >
                                                {this.state.knowledge.map((knowledge, index) => {
                                                    if (knowledge.type == 1)
                                                        return (
                                                            <Grid container className={classes.divider} key={"knowledge" + index}>
                                                                <Grid item xs={8} sm={8} md={8} >{knowledge.name + ":"}</Grid>
                                                                <Grid item xs={4} sm={4} md={4} >{knowledge.value + "/10"}</Grid>
                                                            </Grid >
                                                        )
                                                })}
                                                <Button variant="contained" color="primary" className={classes.button} >
                                                    Thêm mới
                                                </Button>
                                            </TabPanel>
                                            <TabPanel value={this.state.tabsValue} index={2}>
                                                <Grid container className={classes.label}>
                                                    <Grid item xs={8} sm={8} md={8} >Tên</Grid>
                                                    <Grid item xs={4} sm={4} md={4} >Điểm tương ứng</Grid>
                                                </Grid >
                                                {this.state.knowledge.map((knowledge, index) => {
                                                    if (knowledge.type == 2)
                                                        return (
                                                            <Grid container className={classes.divider} key={"knowledge" + index}>
                                                                <Grid item xs={8} sm={8} md={8} >{knowledge.name + ":"}</Grid>
                                                                <Grid item xs={4} sm={4} md={4} >{knowledge.value + "/10"}</Grid>
                                                            </Grid >
                                                        )
                                                })}
                                                <Button variant="contained" color="primary" className={classes.button} onClick={()=>{this._openModal(2)}}>
                                                    Thêm mới
                                                </Button>
                                            </TabPanel>

                                        </SwipeableViews>

                                    </div>
                                </CardBody>
                            </Paper>
                        </Card>

                    </GridItem>
                </GridContainer>


            </React.Fragment >
        );
    }
}

const useStyles = theme => (
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
            marginBottom: "30px",

        },
        label: {
            fontWeight: "bold",
            borderBottom: "1px solid #80808054",
            marginBottom: "30px",

        },
        totalSalaryPosition: {
            color: "#000480",
            fontWeight: "bold",
        },
        totalSalary: {
            color: "green",
            fontWeight: "bold",
        },
        root: {
            backgroundColor: theme.palette.background.paper,
            width: "100%",
            padding: "0px",
            paddingTop: "20px"
        },
        button: {
            margin: theme.spacing(1),
            float: "right"
        },

    })

export default withStyles(useStyles)(P1Detail);