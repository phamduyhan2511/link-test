import React from 'react'
import BaseConsumer from "BaseComponent/BaseConsumer";
import { Grid, withStyles } from '@material-ui/core';
import Accordion from "components/Accordion/Accordion";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import Button from "components/CustomButtons/Button";
import AssignmentIcon from '@material-ui/icons/Assignment';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';


const styles = (them) => ({
    cardTitle: {
        textAlign: "center",
        fontSize: "20px",
        marginTop: "0",
        marginBottom: "0px",
        minHeight: "auto",
    },
    button: {
        float: "right",
        backgroundColor: "#3f71b5"
    }
})

class TaskCard extends BaseConsumer {
    constructor(props) {
        super(props);
        this.state = {}
    }

    _openModal = () =>{}

    consumerContent() {
        const { classes } = this.props
        return (
            <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader>
                            <h4 className={classes.cardTitle}> Danh sách kế hoạch</h4>
                        </CardHeader>
                        <CardBody>
                            <Accordion
                                collapses={[
                                    {
                                        title: "Đạt chứng chỉ A" + "",
                                        content: <Grid container>
                                                    <Grid item xs={9} md={9} sm={9}>Tên nhiệm vụ</Grid>
                                                    <Grid item xs={3} md={3} sm ={3}>Deadline</Grid>
                                                    {[{name: "Đọc 10 quyển sách", dueDate:"12/09/2019"}, {name:"Thực hành 10 lần", dueDate:"24/01/2020"}].map((task, index)=>{
                                                        return(
                                                            <React.Fragment  key={index}>
                                                            <Grid item xs={9} md={9} sm={9}>{task.name}</Grid>
                                                        <Grid item xs={3} md={3} sm ={3}>{task.dueDate}</Grid>
                                                        </ React.Fragment>
                                                        )
                                                    })}
                                                </Grid>

                                    },
                                    {
                                        title: "Đạt chứng chỉ B",
                                        content: <Grid container>
                                        <Grid item xs={9} md={9} sm={9}>Tên nhiệm vụ</Grid>
                                        <Grid item xs={3} md={3} sm ={3}>Deadline</Grid>
                                        {[{name: "Đọc 10 quyển sách", dueDate:"12/09/2019"}, {name:"Thực hành 10 lần", dueDate:"24/01/2020"}].map((task, index)=>{
                                            return(
                                                <React.Fragment  key={index}>
                                                <Grid item xs={9} md={9} sm={9}>{task.name}</Grid>
                                            <Grid item xs={3} md={3} sm ={3}>{task.dueDate}</Grid>
                                            </ React.Fragment>
                                            )
                                        })}
                                    </Grid>

                                    },
                                    {
                                        title: "Đạt chứng chỉ C",
                                        content: <Grid container>
                                        <Grid item xs={9} md={9} sm={9}>Tên nhiệm vụ</Grid>
                                        <Grid item xs={3} md={3} sm ={3}>Deadline</Grid>
                                        {[{name: "Đọc 10 quyển sách", dueDate:"12/09/2019"}, {name:"Thực hành 10 lần", dueDate:"24/01/2020"}].map((task, index)=>{
                                            return(
                                                <React.Fragment key={index}>
                                                <Grid item xs={9} md={9} sm={9}>{task.name}</Grid>
                                            <Grid item xs={3} md={3} sm ={3}>{task.dueDate}</Grid>
                                            </ React.Fragment>
                                            )
                                        })}
                                    </Grid>


                                    }
                                ]}
                            />
                            <Button variant="contained" className={classes.button} onClick={this._openModal}>
                            <PlaylistAddIcon />
                                Thêm  mới
                            </Button>
                            <Button variant="contained"  className={classes.button} onClick={this._openModal}>
                            <AssignmentIcon />
                                Chỉnh sửa 
                            </Button>
                        </CardBody>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(TaskCard);

