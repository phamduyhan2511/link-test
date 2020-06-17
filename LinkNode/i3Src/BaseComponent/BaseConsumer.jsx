
import React from '../../i3NodeModules/react'
//import ConfirmModal from './ConfirmModal.jsx';
import { Context } from './BasePage';
import ehealth from '../general/i3app'

const _shallowCompare = function (instance, nextProps, nextState) {
    var result = !ehealth.shallowEqual(instance.props, nextProps) || !ehealth.shallowEqual(instance.state, nextState);
    return result;
}

export default class BaseConsumer extends React.Component {
    constructor(props) {
        super(props);
        this._hasSignalR = false;
        this._hasConsumerFunctions = false;
        this._noOverride = false;
        var _renderContent = (consumerFunctions) => {
            this._noOverride  = true;
            if (this._hasConsumerFunctions == false) {
                Object.keys(consumerFunctions).forEach(key => {
                    this[key] = consumerFunctions[key];
                });
                this.registerNeed = (needs, component) => {
                    consumerFunctions.registerNeed(needs, component);
                    this._hasSignalR = true;
                }
                this._hasConsumerFunctions = true;
            }
            return this.consumerContent();
        }
        var _self = this;
        _self.render = function() {
            return (
                <Context.Consumer>
                    {_renderContent}
                </Context.Consumer>
            );
        }
    }
    test(){
        return 'cuong';
    }
    shouldComponentUpdate(nextProps, nextState) {
        var result = _shallowCompare(this, nextProps, nextState);
        // console.log(result);
        return result;
    }

    consumerContent() {
        throw ("not implemented exception!");
    }

    componentWillUnmount() {
        if (this._hasSignalR == true) {
            this.unregisterNeed(this);
        }
    }
    componentDidMount() {
        
    }
}