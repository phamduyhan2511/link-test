import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

class AddNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.add} onClick={this.props.onClick}>
                <div className={classes.item}>
                    <i className="fas fa-plus-circle" style={{ color: "#004e87", marginRight: "3px" }}></i> {this.props.text}
                </div>
            </div>
        );
    }
}

const styles = {
    add: {
        width: "300px",
        border: "solid 1px #bfcad3",
        cursor: "pointer",
        height: "82px",
        margin: "10px 15px",
    },
    item: {
        color: "#004e87",
        height: "100%",
        display: "flex",
        alignItems: "center",
        fontWeight: "600",
        justifyContent: "center",
    }
}

AddNew.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default withStyles(styles)(AddNew);