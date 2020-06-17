import React from 'react';
import PropTypes from 'prop-types';
import Item from '../general/Item';

class LisItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    _handleChange = (event)=>{
        this.props.onClickMirror(this.props.id, event.target.checked)
    }

    render() {
        return (
            <Item 
                name = {this.props.name}
                imgSrc = {this.props.imgSrc}
                rightInfo = {<React.Fragment>
                    <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.props.isMirror}
                        onChange={this._handleChange}
                        value={this.props.id}
                        color="primary"
                      />
                    }
                    label="Mirror"
                  />
                  </React.Fragment>}
                isActive = {this.props.isActive}
                onAction = {this.props.onAction}
                actionIcon = {this.props.actionIcon}
            />
        );
    }
}

LisItem.propTypes ={
    imgSrc : PropTypes.string,
    name : PropTypes.string,
    rightInfo: PropTypes.node,
    isActive: PropTypes.bool,
    // onAction: PropTypes.func,
    actionIcon: PropTypes.node,
}

export default LisItem