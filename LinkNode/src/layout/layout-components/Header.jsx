import BaseConsumer from 'BaseComponent/BaseConsumer';
import React from 'react'
import { withStyles } from '@material-ui/core';
import Colors from '../../general/Color';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

class Header extends BaseConsumer {

    consumerContent() {
        const { classes, title, onClickNoti, handleOpenMenu } = this.props;
        return (
            <div className={classes.title}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleOpenMenu}
                    edge="start"
                >
                    <MenuIcon />
                </IconButton>
                {title}
                
                <div onClick={onClickNoti} className={classes.notification}>
                    <i className="far fa-bell"></i>
                </div>
            </div>
        )
    }
}

export default withStyles({
    title: {
        padding: '1rem 1rem 1rem',
        borderBottom: '1px solid ' + Colors.border,
        fontSize: '1.3rem',
        fontWeight: '500',
        background: Colors.primary,
        color: 'white',
        position: 'relative',
    },
    notification: {
        position: 'absolute',
        right: '1rem',
        bottom: '.2rem',
        marginBottom:"24px"
    }
})(Header);