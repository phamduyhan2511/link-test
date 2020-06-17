import { withStyles } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ehealth from "general/i3app.js";
import moment from 'moment';
import React, { Fragment } from 'react';
import Colors from "../../general/Color";
import { paths } from "../../general/routes";
import Layout from "../../layout/Layout";
import Avatar from "../../react-components/general/Avatar";

class DashboardPage extends Layout {
    constructor(props) {
        super(props);
        this.pageTitle = "Trang chủ";
        this.isNotHeader = true;
        this._randomString = ehealth.guid.get();
        this.state.buttons = [
            { p: "P1", score: 9, onClick: this._onClickP1, color: Colors.p1 },
            { p: "P2", score: 10, onClick: this._onClickP2, color: Colors.p2 },
            { p: "P3", score: 8, onClick: this._onClickP3, color: Colors.p3 },
        ]
    }

    __onClick3P = () => {
        this.goTo(paths["3p"]);
    }
    _onClickP1 = () => {
        this.goTo(paths["3p"]);
    }
    _onClickP2 = () => {
        this.goTo(paths["3p"]);
    }
    _onClickP3 = () => {
        this.goTo(paths["3p"]);
    }
    renderBody() {
        const { classes, data } = this.props;
        const { buttons } = this.state;
        const isManager = true;
        let { upcomingTask } = data;
        return (
            <Fragment>
                <div style={{ position: 'relative', padding: '8px' }}>
                    <div className={classes.user}>
                        <div className={classes.avatar}>
                            <Avatar
                                src="/dist/Contents/img/doctor.jpg"
                                width="70px"
                            />
                        </div>
                        <div className={classes.name}>
                            Nguyễn Văn A
                    </div>
                        <div className={classes.position}>
                            Bác sĩ chuyên khoa
                        </div>
                    </div>

                    <div onClick={this._onClickP1} style={{ width: '30%', height: '40%', position: 'absolute', top: '40%' }}></div>
                    <div onClick={this._onClickP2} style={{ width: '30%', height: '40%', position: 'absolute', top: '40%', right: '2%' }}></div>
                    <div onClick={this._onClickP3} style={{ width: '40%', height: '30%', position: 'absolute', bottom: '3%', left: '29%' }}></div>
                    <img src={'/dist/contents/img/3psalary.png'} style={{ width: '100%' }} />
                </div>

                {/* <div className={classes.section}>
                    <div className={classes.label}>
                        Điểm lương
                    </div>
                    <div style={{ padding: '5px', fontWeight: 500 }}>
                        3P = P1 + P2 + P3
                    </div>
                    <div className={classes.buttons3p}>
                        {buttons.map(i => (
                            <div className={classes.buttonItem} key={i.p}>
                                <div className={classes.innerItem} style={{ background: i.color }} onClick={i.onClick}>
                                    <div className={classes.p}>
                                        {i.p}:&nbsp;
                                    </div>
                                    <div className={classes.score}>
                                        {i.score}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}


                <div className={classes.section}>
                    {upcomingTask.map(task => {
                        return (
                            <Card className={classes.card} key={this._randomString + "_task" + task.type}>
                                <CardHeader
                                    style={{ paddingBottom: '8px' }}
                                    title={<React.Fragment><i className={task.icon}></i>&nbsp;&nbsp;{`${task.name} (${task.items.length})`}</React.Fragment>}
                                />
                                <CardContent style={{ paddingTop: '0px' }}>
                                    <List className={classes.root}>
                                        {task.items.map((i, index) => {
                                            return (
                                                <ListItem style={{ paddingTop: '0px' }} key={this._randomString + "item" + task.type + "_" + i.id}>
                                                    <ListItemText
                                                        primary={<div><span>{`${index + 1}. ${i.name}`}</span><span  style={{ color: i.value == "75%" ? "red" : 'rgba(95, 89, 90, 1)', float: "right"}}>{i.value}</span></div>}
                                                        secondary={<span style={{ color: 'rgba(95, 89, 90, 1)', marginLeft:"20px" }}>{moment(i.deadlineTime).format("DD/MM/YYYY HH:mm")}</span>}
                                                        style={{ margin: '0px' }} />
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </Fragment>
        )
    }
}
export default withStyles({
    p: {

    },
    score: {
        // fontSize: '1.6rem',
        // lineHeight: '1.6rem',
    },
    buttons3p: {
        display: 'flex',
    },
    buttonItem: {
        flex: '1',
        padding: '5px',
        cursor: 'pointer'
    },
    innerItem: {
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: '1.1rem',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    avatar: {
        display: 'flex',
        justifyContent: 'center',
    },
    user: {
        textAlign: 'center',
        padding: '1rem',
        fontWeight: '500',
        position: 'absolute',
        left: '0px',
        right: '0px',
        top: '2%'
        //borderBottom: '1px solid ' + Colors.border,
    },
    name: {
        fontSize: '1.1rem',
    },
    position: {
        fontWeight: 400
    },
    section: {
        padding: '.5rem',
        borderBottom: '1px solid ' + Colors.border,
    },
    label: {
        fontSize: '1.15rem',
        fontWeight: '500',
    },
    root: {
        paddingTop: '0px'
    },
    card: {
        marginBottom: '20px'
    }

})(DashboardPage);