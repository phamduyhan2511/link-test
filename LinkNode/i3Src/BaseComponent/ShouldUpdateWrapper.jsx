import React from '../../i3NodeModules/react';
import ehealth from '../general/i3app';

class ShouldUpdateWrapper extends React.Component {
    constructor(props) {
        super(props);
        Object.keys(this.props).forEach(prop => {
            if (typeof this.props[prop] === "function") {
                this._eventFunction[prop] = (...params) => {
                    this.props[prop](...params);
                }
            }
        })
    }

    _eventFunction = {};

    render() {
        let { children, ...props } = this.props;
        const childrenRender = React.Children.map(children, child => {
            return React.cloneElement(child, { ...children.props, ...props, ...this._eventFunction });
        })
        return (
            <React.Fragment>
                {childrenRender}
            </React.Fragment>
        );
    };

    shouldComponentUpdate(nextProps, nextState) {
        let { children: oldChildren, ...currentProps } = this.props;
        let { children: newChildren, ...newProps } = nextProps;
        let x = !ehealth.shallowEqual(currentProps, newProps);
        return x;
    }
}

export default ShouldUpdateWrapper