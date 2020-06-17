import React from 'react';
import BaseConsumer from 'BaseComponent/BaseConsumer';
import { Grid } from "@material-ui/core";
import { withStyles } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { menu } from '../../general/routes'
import { Divider } from '@material-ui/core';


class MenuItemLayout extends BaseConsumer {
    constructor(props) {
        super(props);
    }
    _onClickMenu = item => {
        this.goTo(item.path);
    }

    consumerContent() {
        const { classes } = this.props
        return (
            <Grid container onClick={this.props.handleCloseMenu} onKeyDown={this.props.handleCloseMenu} className={classes.menu} >

                <Grid item xs={12} md={12} sm={12} style={{textAlign: "right", fontSize:"20px", marginRight:"10px", marginTop:"20px"}} >
                    <span onClick={this.props.handleCloseMenu} className={classes.backIcon}><i class="fas fa-chevron-right"></i></span>
                </Grid>
                {menu.map((item, index) => {
                    return (

                        <Grid
                            container
                            item xs={12} md={12} sm={12}
                            key={item.label}
                            onClick={() => { this._onClickMenu(item) }}
                            className={classes.menuItem}
                        >
                            <Grid item xs={2} md={2} sm={2} className={classes.iconMenu}>
                                {item.icon}
                            </Grid>
                            <Grid item xs={10} md={10} sm={10} className={classes.labelMenu} >
                                {item.label}
                            </Grid>
                            
                        </Grid>

                    )
                })}

            </Grid>
        );
    }
}

const styles = {
    iconMenu: {
        fontSize: "20px"
    },

    backIcon:{
        "&:hover":{
            backgroundColor: '#cccccc',
            cursor: "pointer"
        }
    },

    labelMenu: {
        fontSize: "20px"
    },

    menu: {
        width: "300px",
        display: "block",
        backgroundColor: "#237a9e",
        color: "white",
        height: "100%"
    },

    

    menuItemText: {
        fontWeight: "bold",
        fontSize: "15px"
    },
    menuItem: {
        marginTop: "20px",
        marginLeft: "15px",
    }
}

export default withStyles(styles)(MenuItemLayout);

