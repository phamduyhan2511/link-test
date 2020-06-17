import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Grid className={classes.item} container >
                    <Grid className={classes.itemImg} item xs={4} md={4} sm={4} >
                        <img src={this.props.imgUrl} style={{ height: "90%" }}></img>
                    </Grid>
                    <Grid item xs={8} md={8} sm={8} >
                        <Grid className={classes.itemInfo} container >
                            <Grid className={classes.itemName} item xs={6} md={6} sm={6} >
                                {this.props.name}
                            </Grid>
                            <Grid className={classes.itemRightInfo} item xs={6} md={6} sm={6} >
                                {this.props.rightInfo}
                            </Grid>
                        </Grid>
                        <Grid className={classes.itemInfo} container >
                            <Grid className={classes.itemIsActive} item xs={6} md={6} sm={6} >
                                {this.props.isActive == true ?
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <i style={{ color: "rgb(46, 185, 169)", marginRight: "3px" }} className="far fa-circle">
                                        </i>
                                        Active
                                    </div> :
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <i style={{ color: "rgb(208, 2, 27)", marginRight: "3px" }} className="fas fa-circle">
                                        </i>
                                        Inactive
                                    </div>
                                }
                            </Grid>
                            <Grid className={classes.itemOnAction} item xs={6} md={6} sm={6} >
                                <div onClick={this.props.onAction}>{this.props.actionIcon}</div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

const styles = {
    item: {
        width: "300px",
        border: "solid 1px #bfcad3",
        height: "82px",
        margin: "10px 15px",
        boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: " #ffffff",
    },
    itemImg: {
        height: "82px",
        display: "flex",
        alignItems: "center",
        borderRight: "solid 1px #bfcad3",
        justifyContent: "center",
    },
    itemInfo: {
        height: "50%",
        borderBottom: "solid 1px #bfcad3",
    },
    itemName: {
        display: "flex",
        fontSize: "14px",
        alignItems: "center",
        fontWeight: "600",
        paddingLeft: "20px",
    },
    itemRightInfo: {
        display: "flex",
        fontSize: "13px",
        alignItems: "center",
        paddingRight: "10px",
        justifyContent: "flex-end",
    },
    itemAction: {
        height: "50%",
    },
    itemIsActive: {
        display: "flex",
        fontSize: "13px",
        alignItems: "center",
        paddingLeft: "16px",
    },
    itemOnAction: {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        paddingRight: "10px",
        justifyContent: "flex-end",
    }
}

Item.propTypes = {
    imgSrc: PropTypes.string,
    name: PropTypes.string,
    rightInfo: PropTypes.node,
    isActive: PropTypes.bool,
    // onAction: PropTypes.func,
    actionIcon: PropTypes.node,
}

export default withStyles(styles)(Item)