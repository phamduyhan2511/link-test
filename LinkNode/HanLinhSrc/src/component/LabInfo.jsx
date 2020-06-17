import React from 'react';
import BaseConsumer from 'BaseComponent/BaseConsumer';
import { withStyles } from '@material-ui/core';
import AnalyserItem from './AnalyserItem';

class LabInfo extends BaseConsumer {
    constructor(props) {
        super(props);
        this.state = {}
    }

    _onClickEdit = ()=>{
        this.props.onClickEdit(this.props.id)
    }

    _onDelete = (id)=>{

    }

    consumerContent() {
        const analyserNumber = this.props.listAnalyser.length;
        const lisNumber = this.props.listLis.length;
        const mirrorNumber = this.props.listLis.filter(i => i.isMirror == true).length;
        return (
            <div>
                <div>
                    <span>{this.props.name}</span>
                    <span></span>
                    <span>Priority: {this.props.priority}</span>
                    <span></span>
                    <span>{analyserNumber} analyser, {lisNumber} LIS, + {mirrorNumber} mirror</span>
                    <span></span>
                    <span onClick={this._onClickEdit}><span><i className="fas fa-pen"></i></span> Edit Lab</span>
                </div>
                <div>
                    <div>Analyser</div>
                </div>
                <div>
                    {this.props.listAnalyser.map(i => {
                        return (
                            <AnalyserItem
                                key = {i.id}
                                id = {i.id}
                                name = {i.name}
                                imgSrc = {i.imgage}
                                serial = {i.serial}
                                isActive = {i.isActive}
                                onAction = {()=>{this._onDelete(i.id)}}
                                actionIcon = {<i className="fas fa-trash-alt"></i>}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }
}

const styles = {

}

export default withStyles(styles)(LabInfo);