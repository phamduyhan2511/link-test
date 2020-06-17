import BaseRouteWrapper from '../../BaseComponent/BaseRouteWrapper';
import CloneX from './CloneX';
import { Button } from '@material-ui/core';
import React from 'react';
export default class HomePage extends BaseRouteWrapper {
    constructor(props) {
        super(props);
      
    }

    _testModal = ()=>{
        let data = this.getData();
        this.openModal(()=>{
            return {
                title: 'test',
                body: <CloneX test={data}/>
            }
        })
    }

    consumerContent() {
        let data = this.getData();
        if (!data){
            return null;
        }
        return (<div>
            <h4>This is Home page</h4>
            <Button onClick={this._testModal}>open Modal</Button>
            </div>)
    }
    componentDidMount(){
        super.componentDidMount();
        var data  =  {
            listA: [{
                x: "a",
                listX: [{
                    y: "b"
                }]
            }]
        };
        this.setData(data);
    }
}

// ReactDOM.render(React.createElement(withStyles({})(HomePage)), document.getElementById("content"));