import Colors from "../../general/Color";
import BaseConsumer from 'BaseComponent/BaseConsumer';
import React from 'react';
import LabConfig from '../../component/LabConfig';

export default class LabConfigPage extends BaseConsumer {
    constructor(props){
        super(props);
    }
    consumerContent() {
        return (
           <LabConfig data={this.props.data} />
        )
    }
}