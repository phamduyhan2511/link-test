import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import {FormControlLabel, Checkbox, withStyles} from '@material-ui/core';

// const FormControlLabelCss = withStyles

class LisItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    _handleChange = (event)=>{
        this.props.onClickMirror(this.props.id, event.target.checked)
    }

    render() {
        const {classes} = this.props
        return (
            <Item 
                name = {this.props.name}
                imgUrl = {this.props.imgUrl}
                rightInfo = {<React.Fragment>
                    <FormControlLabel
                    classes={{root: classes.formControlLabelRoot}}
                    control={
                      <Checkbox
                        classes={{root: classes.checkboxRoot}}
                        checked={this.props.isMirror}
                        onChange={this._handleChange}
                        value={this.props.isMirror}
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

const styles = {
    formControlLabelRoot: {
        marginRight: "0px",
    },
    checkboxRoot: {
        padding: "9px 0px"
    }
}

export default withStyles(styles)(LisItem)