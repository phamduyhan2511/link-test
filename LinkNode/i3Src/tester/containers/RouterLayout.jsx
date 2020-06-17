import React from 'react';
import BaseRouterPage from '../../BaseComponent/BaseRouterPage';
import { Router, Route, Link } from 'react-router-dom';
import HomePage from '../components/HomePage';
import TestPage from '../components/TestPage';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
export default class RouterLayout extends BaseRouterPage {
    constructor(props) {
        super(props);
        this.state = {};
        this._routes = [{
            title: "Trang chủ",
            url: '/',
            component: HomePage
        }, {
            title: 'Test Page',
            url: '/TestPage',
            component: TestPage
        }]
    }

    _navigateHome = () => {
      
        this.goTo('/');
    }

    _navigateTest = () => {
        this.goTo('/TestPage');
    }

    _goBack = () => {
        var temp = this.back();
    }

    getRootPages(){
        return (['/']);
    }

    _toMulti = ()=>{
        this.goTo('/MultiLayout.html');
    }
    
    getSignalRHub(){
        return null;
    }

    childrenRender() {
        var hist = this.getHistory();
        return (
            <React.Fragment>
                <div style={{ background: 'green' }}>
                    <h4>
                        Hello
                </h4>
                </div>
                <Button onClick={this._navigateHome}>Home</Button>
                <Button onClick={this._navigateTest}>Test</Button>
                <Button onClick={this._goBack}>Back</Button>
                <Button onClick={this._toMulti}>Go to multi</Button>
                <Router history={hist}>
                    {this._routes.map((route, index) => {
                        return (
                            <Route exact={index==0} path={route.url} component={route.component} key={`route_${index}`}></Route>
                        )
                    })}

                </Router>

            </React.Fragment>
        )

    }
}

ReactDOM.render(<RouterLayout />, document.getElementById('content'));