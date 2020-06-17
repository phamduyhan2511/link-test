import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <Grid container >
                    <Grid item xs={4} md={4} sm={4} >
                        <img src={this.props.imgUrl} style={{ height: "90%" }}></img>
                    </Grid>
                    <Grid item xs={8} md={8} sm={8} >
                        <Grid container>
                            <Grid item xs={6} md={6} sm={6} >
                                {this.props.name}
                            </Grid>
                            <Grid item xs={6} md={6} sm={6} >
                                {this.props.rightInfo}
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={6} md={6} sm={6} >
                                {this.props.isActive == true ?
                                    <div><i style={{ color: "green" }} className="far fa-circle"></i> Active</div> :
                                    <div><i style={{ color: "red" }} className="fas fa-circle"></i> Inactive</div>}
                            </Grid>
                            <Grid item xs={6} md={6} sm={6} >
                                <div onClick={this.props.onAction}>{this.props.actionIcon}</div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

Item.propTypes ={
    imgSrc : PropTypes.string,
    name : PropTypes.string,
    rightInfo: PropTypes.node,
    isActive: PropTypes.bool,
    // onAction: PropTypes.func,
    actionIcon: PropTypes.node,
}

export default Item