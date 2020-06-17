import { withStyles } from "@material-ui/core";
import React, { Fragment } from 'react';
import Layout from "../../layout/Layout";
import DateBar from "../../react-components/dashboard/DateBar";
import moment from "moment";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import $ from 'jquery';

class TaskPage extends Layout {
    constructor(props) {
        super(props);
        this.pageTitle = "Công việc của tôi";
    }

    _setDateChosen = (date) => {
        let { calendarSearch } = this.props.data;
        let container = $("#taskList");
        let selectedDiv = $(`#${this._hashDate(date)}`);
        console.log(selectedDiv);
        this.updateObject(calendarSearch, { dateChosen: date }, () => {
            if (selectedDiv.length >= 1) {
                container.animate({
                    scrollTop: selectedDiv.offset().top - container.offset().top + container.scrollTop()
                });
            }
        });
    }

    _onLoadMoreLeft = (callback) => {
        callback();
    }

    _onLoadMoreRight = (callback) => {
        callback();
    }

    _hashDate = (date) => {
        return moment(date).format("DDMMYYYY");
    }

    renderBody() {
        const { classes, data } = this.props;
        let { calendarSearch, taskList } = data;

        let dateHasTask = [];
        taskList.forEach(t => {
            let d = t.fromDate;
            while (moment(t.toDate).isSameOrAfter(moment(d), 'day') == true) {
                if (!dateHasTask.find(i => moment(i).isSame(moment(d), 'day'))) {
                    dateHasTask.push(d);
                }
                d = d.addDays(1);
            }
        })
        return (
            <Fragment>
                <DateBar
                    dateHasTask={dateHasTask}
                    fromDate={calendarSearch.fromDate}
                    toDate={calendarSearch.toDate}
                    dateChosen={calendarSearch.dateChosen}
                    onClickDate={this._setDateChosen}
                    onLoadMoreLeft={this._onLoadMoreLeft}
                    onLoadMoreRight={this._onLoadMoreRight}
                />

                <div style={{ marginTop: '20px', overflowY: 'auto', height: 'calc(100% - 100px)' }} id={"taskList"}>
                    {taskList.map((task, index) => {
                        return (
                            <div style={{ marginTop: '15px' }} id={this._hashDate(task.fromDate)} key={task}>
                                <div><b>{moment(task.fromDate).format("DD/MM/YYYY")}</b></div>
                                <Card className={classes.card} key={"task" + task.id + "_" + index}>
                                    <CardContent style={{ display: 'flex', minHeight: '70px' }}>
                                        <div style={{ width: '50px', borderRight: `3px solid ${task.type == 2 ? 'red' : 'blue'}` }}>
                                            {moment(task.toDate).format("HH:mm")}
                                        </div>
                                        <div style={{ width: 'calc(100% - 100px)', paddingLeft: '10px' }}>
                                            {task.name}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </Fragment>
        )
    }
}
export default withStyles({


})(TaskPage);