import { BasePage } from '../../BaseComponent/BasePage';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';

export default class MultiLayout2 extends BasePage {
    constructor(props) {
        super(props);
        this.state = {
            test: 'hello'
        }
    }

    _navigate= ()=>{
        console.log(this.history);
        //this.history.push('https://reacttraining.com/react-router/web/example/basic');
       // window.location.href = './MultiLayout.html';
        this.goTo('./MultiLayout.html');
    }

    _back=()=>{
        this.back();
    }
    getRootPages=()=>{
        return [];
    }

    getSignalRHub(){
        return null;
    }

    childrenRender() {
        return (
            <React.Fragment>
                <Button onClick={this._navigate}>To 1</Button>
                <Button onClick={this._back}>Back</Button>
                <div>{this.state.test}</div>
            </React.Fragment>
        )
    }
}


ReactDOM.render(<MultiLayout2 />, document.getElementById('content'));