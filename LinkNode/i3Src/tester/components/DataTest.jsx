import BaseConsumer from '../../BaseComponent/BaseConsumer';
import ehealth from '../../general/i3app';
import React from 'react';
import TestX from './TestX';

export default class DataTest extends BaseConsumer {
    constructor(props) {
        super(props);
        this._random = ehealth.guid.get();
    }
    _onChangeInput = (item) => {
        this.updateObject(item)
    }
    consumerContent() {
        let test = this.props.test;
        return (<React.Fragment>
              <div>{ehealth.guid.get()}</div>
            {JSON.stringify(this.props.test)}
            <div></div>
            <input value={this.props.test.name} onChange={(e) => { 
                this.updateObject(this.props.test, { name: e.target.value }) }}></input>
            <div></div>
            <TestX data={this.props.test} />
        </React.Fragment>
        )
    }

}
