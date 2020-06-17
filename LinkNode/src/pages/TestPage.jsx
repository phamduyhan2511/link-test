import { BasePage } from 'BaseComponent/BasePage';
import BaseCloneConsumer from 'BaseComponent/BaseCloneConsumer';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, withStyles } from '@material-ui/core';
import DateFnsUtils from "@date-io/moment"; // choose your lib
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";

export default class TestPage extends BasePage {
    constructor(props) {
        super(props);
        this.state = {
            test: {
                listA: [{
                    x: "a",
                    listX: [{
                        y: "b"
                    }]
                }]
            },
            selectedDate: new Date()
        }
    }

    _testModal = () => {
        this.openModal(() => {
            return {
                title: 'test',
                body: <CloneX test={this.state.test} />
            }
        })
    }

    _handleDateChange = (newDate) => {
        this.setState({ selectedDate: newDate });
    }

    childrenRender() {
        console.log('test');
        let { test, selectedDate } = this.state;
        return (<React.Fragment>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker value={selectedDate} onChange={this._handleDateChange} />
                <TimePicker value={selectedDate} onChange={this._handleDateChange} />
                <DateTimePicker value={selectedDate} onChange={this._handleDateChange} />
            </MuiPickersUtilsProvider>
            <Button onClick={this._testModal}>abc</Button>
        </React.Fragment>)
    }
}

class CloneX extends BaseCloneConsumer {
    constructor(props) {
        super(props);
    }
    getCloneStateName() {
        return "cloneX";
    }

    getCloneStateData() {
        return this.props.test;
    }

    childrenCloneContent() {
        var test = this.getCloneStateByKey("cloneX");
        console.log(test);
        return (
            <React.Fragment>
                {test.listA.map((i, index) => {
                    return (
                        <React.Fragment key={`A_${index}`}>
                            <input value={i.x} onChange={(e) => { this.updateObject(i, { x: e.target.value }) }} />
                            {i.listX.map((j, index) => {
                                return (
                                    <input key={`X_${index}`} value={j.y} onChange={(e) => { this.updateObject(j, { y: e.target.value }) }} />
                                )
                            })}
                        </React.Fragment>
                    )
                })}
                <div>{JSON.stringify(test)}</div>
            </React.Fragment>
        )
    }

}
window.renderPage = (dom) => {
    ReactDOM.render(React.createElement(withStyles({})(TestPage)), dom)
}