import React from 'react';
import PropTypes from 'prop-types';
import Item from '../general/Item';

class AnalyserItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Item 
                name = {this.props.name}
                imgSrc = {this.props.imgSrc}
                rightInfo = {<React.Fragment>{this.props.serial}</React.Fragment>}
                isActive = {this.props.isActive}
                onAction = {this.props.onAction}
                actionIcon = {this.props.actionIcon}
            />
            //<React.Fragment>ok</React.Fragment>
        );
    }
    
}

AnalyserItem.propTypes ={
    imgSrc : PropTypes.string,
    name : PropTypes.string,
    rightInfo: PropTypes.node,
    isActive: PropTypes.bool,
    onAction: PropTypes.func,
    actionIcon: PropTypes.node,
}


export default AnalyserItem