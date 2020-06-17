import {BasePage} from './BasePage';
import React from '../../i3NodeModules/react';
import { createBrowserHistory } from "../../i3NodeModules/history";

export default class BaseRouterPage extends BasePage {
    constructor(props) {
        super(props);
        this.history = createBrowserHistory();
    }

    doBack(){
        this.history.go(-1);
    }
    goTo(url){
        this.history.push(url);
    }
    getHistory(){
        return this.history;
    }

    getCurrentPath(){
        return this.history.location.pathname;
    }
}