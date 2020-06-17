import React from "react";
import BaseConsumer from 'BaseComponent/BaseConsumer'
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardIcon from "components/Card/CardIcon";
import SwipeableViews from 'react-swipeable-views';
import { withStyles, Paper, Grid, Typography, Box, Tab, Tabs, AppBar, Button } from "@material-ui/core";
import CardBody from "components/Card/CardBody";
import moment from 'moment'
import ModalAddBody from "../ModalAdd/ModalAddBody.jsx";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
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
            <Box p={3} style={{paddingBottom : "0px"}}>{children}</Box>
        </Typography>
    );
}

class P2Card extends BaseConsumer {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    _handleChange = (event, newValue) => {
        this.updateObject(this.props.tabsValue, { value: newValue })

    }

    _handleChangeIndex = index => {
        this.updateObject(this.props.tabsValue, { value: index })

    };

    _openModal = (index) => {
        this.openModal(() => {
            if (index == 0)
                return ({
                    title: "Thêm bằng cấp",
                    body: <ModalAddBody />, // nội dung
                    otherProps: {
                        // một số các option cho modal, có thể có hoặc ko 
                        slideDirection: "left", // or "right", "down", "up", phía xuất hiện và biến mất của modal
                        //freeSize: false // false, nếu true thì kích thước modal sẽ tuỳ thuộc vào body
                        // và một số options khác 
                        fullscreen: false,
                    }
                })
            else if (index == 1)
                return ({
                    title: "Thêm kĩ năng chuyên môn",
                    body: <ModalAddBody />, // nội dung
                    otherProps: {
                        // một số các option cho modal, có thể có hoặc ko 
                        slideDirection: "left", // or "right", "down", "up", phía xuất hiện và biến mất của modal
                        //freeSize: false // false, nếu true thì kích thước modal sẽ tuỳ thuộc vào body
                        // và một số options khác 
                        fullscreen: false,
                    }
                })
            else if (index == 2)
                return ({
                    title: "Thêm kĩ năng mềm",
                    body: <ModalAddBody />, // nội dung
                    otherProps: {
                        // một số các option cho modal, có thể có hoặc ko 
                        slideDirection: "left", // or "right", "down", "up", phía xuất hiện và biến mất của modal
                        //freeSize: false // false, nếu true thì kích thước modal sẽ tuỳ thuộc vào body
                        // và một số options khác 
                        fullscreen: false,
                    }
                })
        });
    }

    consumerContent() {
        const { classes, tabsValue, knowledge } = this.props
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
                                                value={tabsValue.value}
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
                                            index={tabsValue.value}
                                            onChangeIndex={this._handleChangeIndex}
                                        >
                                            <TabPanel value={tabsValue.value} index={0} >
                                                <Grid container className={classes.label}>
                                                    <Grid item xs={8} sm={8} md={8} >Tên</Grid>
                                                    <Grid item xs={4} sm={4} md={4} >Điểm tương ứng</Grid>
                                                </Grid >
                                                {knowledge.map((knowledge, index) => {
                                                    if (knowledge.type == 0)
                                                        return (
                                                            <Grid container className={classes.divider} key={"knowledge" + index}>
                                                                <Grid item xs={8} sm={8} md={8} >{knowledge.name + ":"}</Grid>
                                                                <Grid item xs={4} sm={4} md={4} >{knowledge.value + "/10"}</Grid>
                                                            </Grid >
                                                        )
                                                })}
                                                {/* <Button variant="contained" className={classes.button} onClick={()=>{this._openModal(0)}}>
                                                <PlaylistAddIcon /> Thêm mới
                                                </Button> */}
                                            </TabPanel>
                                            <TabPanel value={tabsValue.value} index={1} >
                                                <Grid container className={classes.label}>
                                                    <Grid item xs={8} sm={8} md={8} >Tên</Grid>
                                                    <Grid item xs={4} sm={4} md={4} >Điểm tương ứng</Grid>
                                                </Grid >
                                                {knowledge.map((knowledge, index) => {
                                                    if (knowledge.type == 1)
                                                        return (
                                                            <Grid container className={classes.divider} key={"knowledge" + index}>
                                                                <Grid item xs={8} sm={8} md={8} >{knowledge.name + ":"}</Grid>
                                                                <Grid item xs={4} sm={4} md={4} >{knowledge.value + "/10"}</Grid>
                                                            </Grid >
                                                        )
                                                })}
                                                {/* <Button variant="contained" className={classes.button} onClick={()=>{this._openModal(1)}}>
                                                <PlaylistAddIcon /> Thêm mới
                                                </Button> */}
                                            </TabPanel>
                                            <TabPanel value={tabsValue.value} index={2} >
                                                <Grid container className={classes.label}>
                                                    <Grid item xs={8} sm={8} md={8} >Tên</Grid>
                                                    <Grid item xs={4} sm={4} md={4} >Điểm tương ứng</Grid>
                                                </Grid >
                                                {knowledge.map((knowledge, index) => {
                                                    if (knowledge.type == 2)
                                                        return (
                                                            <Grid container className={classes.divider} key={"knowledge" + index}>
                                                                <Grid item xs={8} sm={8} md={8} >{knowledge.name + ":"}</Grid>
                                                                <Grid item xs={4} sm={4} md={4} >{knowledge.value + "/10"}</Grid>
                                                            </Grid >
                                                        )
                                                })}

                                            </TabPanel>

                                        </SwipeableViews>
                                        <Button variant="contained" className={classes.button} onClick={() => { this._openModal(2) }}>
                                            <PlaylistAddIcon /> Thêm mới
                                        </Button>
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
            fontSize: "20px",

        },
        label: {
            fontWeight: "bold",
            borderBottom: "1px solid #80808054",
            marginBottom: "30px",

        },
        totalSalaryPosition: {
            color: "#000480",
            fontWeight: "bold",
            fontSize: "20px",
        },
        totalSalary: {
            color: "green",
            fontWeight: "bold",
            fontSize: "20px",
        },
        root: {
            backgroundColor: theme.palette.background.paper,
            width: "100%",
            padding: "0px",
            paddingTop: "20px"
        },
        button: {
            margin: theme.spacing(1),
            float: "right",
            backgroundColor: "#3f71b5",
            color: "white",
            fontWeight: "initial",
        },
        
    })

export default withStyles(useStyles)(P2Card)