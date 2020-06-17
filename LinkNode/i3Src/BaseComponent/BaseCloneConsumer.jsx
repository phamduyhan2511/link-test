import BaseConsumer from './BaseConsumer.jsx';
import React from '../../i3NodeModules/react';
export default class BaseCloneConsumer extends BaseConsumer {
    constructor(props) {
        super(props);
        this.firstClone = false;
    }

    consumerContent() {
        let { getCloneStateByKey } = this;

        if (!this.firstClone) {
            this.getCloneStateByKey = () => {
                return getCloneStateByKey(this.getCloneStateName());
            }
            this.firstClone = true;
            return null;
        } else {
            return (
                <React.Fragment>
                    {this.childrenCloneContent()}
                </React.Fragment>
            );
        }
    }

    componentDidMount() {
        this.cloneObjectToState(this.getCloneStateName(), this.getCloneStateData(), () => { });
    }
    getCloneStateName() {
        throw "getCloneStateName() has not been implemented";
    }

    getCloneStateData() {
        throw "getCloneStateData() has not been implemented";
    }

    childrenCloneContent() {
        throw "abc";
    }


    componentWillUnmount() {
        this.deleteCloneObject(this.getCloneStateName());
        super.componentWillUnmount();
    }

    commitData = (commitCallback) => {
        this.updateObject(this.getCloneStateData(), this.getCloneStateByKey(this.getCloneStateName()), commitCallback);

    }
    shouldComponentUpdate = () => {
        return true;
    }
}