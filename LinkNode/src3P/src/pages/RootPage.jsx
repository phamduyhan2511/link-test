import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Route, Router } from "react-router-dom";
import { withStyles, CircularProgress } from '@material-ui/core';
import BaseRouterPage from 'BaseComponent/BaseRouterPage';
import { mainRoutes } from '../general/routes';
import Colors from '../general/Color';
import Tabbar from '../layout/layout-components/Tabbar';
import Size from '../general/size-config';
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

class RootPage extends BaseRouterPage {

    constructor(props) {
        super(props);
        this.state = {
            currentPath: this.getCurrentPath(),
        }
    }
    goTo(url) {
        this.setState({ currentPath: url }, () => {
            super.goTo(url);
        })
    }
    childrenRender(){
        const {classes} = this.props;
        const {currentPath} = this.state;
        var hist = this.getHistory();
        return(
            <Fragment>
               <div className={classes.container}>
                   <div className={classes.body}>
                        <Router history={hist}>
                            {mainRoutes.map(i => (
                                <Route
                                    exact={true}
                                    key={i.path}
                                    path={i.path}
                                    render={props => (
                                        <i.component {...props}/>
                                    )}
                                />
                            ))}
                        </Router>
                    </div>
                    <div className={classes.tabbar}>
                        <Tabbar 
                            currentPath={currentPath}
                        />
                    </div>
               </div>
                <div id="base-page-block-ui" className="disable-block-ui">
                    <div className="block-ui">
                        <CircularProgress style={{color: Colors.blue}}/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

window.renderPage = (dom, props) => {
    ReactDOM.render(React.createElement(withStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
        },
        body: {
            flex: 1,
            overflowY: 'auto',
        },
        tabbar: {
            height: Size.tabbar,
        }
    })(RootPage), props), dom);
};
