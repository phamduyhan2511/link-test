import BaseConsumer from 'BaseComponent/BaseConsumer';
import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core';
import Colors from '../../general/Color';
import { tabbars } from '../../general/routes';
import cx from 'classnames';

class Tabbar extends BaseConsumer {
    constructor(props){
        super(props);
    }
    _onClickTab = i => {
        this.goTo(i.path);
    }
    consumerContent(){
        const {classes, currentPath } = this.props;
        return(
            <Fragment>
                <div className={classes.container}>
                    {tabbars.map(i => {

                        return(
                            <div 
                                className={cx({
                                    [classes.item]: true,
                                    [classes.active]: currentPath == i.path
                                })} 
                                key={i.label}
                                onClick={()=>{
                                    this._onClickTab(i);
                                }}
                            >
                                <div className={classes.icon}>
                                    {i.icon}
                                </div>
                                {/* <div>
                                    {i.label}
                                </div> */}
                            </div>
                        )
                    })}
                </div>
            </Fragment>
        )
    }
}

export default withStyles({
    container: {
        display: 'flex',
        borderTop: '1px solid ' + Colors.border,
        height: '100%',
        background: 'white',
    },
    item: {
        flex: '1 1 25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: '.75',
    },
    icon: {
        fontWeight: '500',
        fontSize: '1.3rem',
        '-webkit-transition': 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', /* Safari prior 6.1 */
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    },
    active: {
        '& $icon': {
            fontSize: '1.4rem',
            color: Colors.primary,
        },
        opacity: '1',
    }
})(Tabbar);