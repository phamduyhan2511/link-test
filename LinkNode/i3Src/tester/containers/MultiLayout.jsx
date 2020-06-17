import { BasePage } from '../../BaseComponent/BasePage';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import DataTest from '../components/DataTest';
import CardFooter from '../../components/Card/CardFooter';
import I3Checkbox from '../../components/CustomComponent/I3Checkbox';
export default class MultiLayout extends BasePage {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: "data",
                listA: [{
                    id:'1',
                    name:'id=A',
                    testA: "testA",
                    ListX: [{
                        id:'11',
                        name:'id=1',
                        testX: "testX",
                        ListX: [{
                            id:'21',
                            name:'id=2',
                            testX: "testY",
                            ListX: [{
                                id:'31',
                                name:'id=3',
                                testX: "testZ",
                                ListX:[{
                                    id: '41'
                                }]
                            }]
                        }]
                    }]
                }]
            }
        }
    }

    getSignalRHub(){
        return null;
    }

    _navigate = () => {
        this.goTo('./MultiLayout2.html');
        //console.log(this.history);
        // window.location.href = './MultiLayout2.html';
        // this.goTo('https://reacttraining.com/react-router/web/example/basic');
    }

    _back = () => {
        this.back();
    }
    getRootPages = () => {
        return [];
    }

    _openModal = (id) => {
        // this.confirm(<div>"abc"</div>,{
        //     okay: {
        //         title: 1
        //     },
        //     cancel: {
        //         title: 'abc',

        //     }
        // })
        this.openModal(() => {
            console.log('open Data',id);
            return {
                title: 'test',
                body: <DataTest test={this.state.data.listA.find(i=> i.id == id)} />
            }
        }, {dialogcontentStyles:{
            root: 'abc'
        }})
    }

    childrenRender() {
        return (
            <React.Fragment>
                {this.state.data.listA.map((item) => {
                    return <React.Fragment key={"Layout_"+item.id}>
                        {JSON.stringify(item)}
                        <Button onClick={()=>{this._openModal(item.id); }}>openModal</Button>
                    </React.Fragment>
                })}

            </React.Fragment>
        )
    }
}

ReactDOM.render(<MultiLayout />, document.getElementById('content'));