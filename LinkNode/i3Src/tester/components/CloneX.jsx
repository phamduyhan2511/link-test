import BaseCloneConsumer from '../../BaseComponent/BaseCloneConsumer';
import React from 'react';
import { Button } from '@material-ui/core';

export default class CloneX extends BaseCloneConsumer {
    constructor(props){
        super(props);
    }
    getCloneStateName() {
        return "cloneX";
    }

    getCloneStateData() {
        return this.props.test;
    }

    _onBack = ()=>{
        this.back();
    }

    childrenCloneContent() {
        var test = this.getCloneStateByKey("cloneX");
        console.log(test);
        return (
            <React.Fragment>
            {test.listA.map((i,index) => {
                return (
                    <React.Fragment key={`A_${index}`}>
                        <input value={i.x} onChange={(e) => { this.updateObject(i, { x: e.target.value }) }} />
                        {i.listX.map((j,index)=>{
                            return (
                                <input key={`X_${index}`} value={j.y} onChange={(e) => { this.updateObject(j, { y: e.target.value }) }} />
                            )
                        })}
                        <Button onClick={this._onBack}>eaaaaa</Button>
                    </React.Fragment>
                )
            })}
            <div>{JSON.stringify(test)}</div>
        </React.Fragment>
        )
    }

}
