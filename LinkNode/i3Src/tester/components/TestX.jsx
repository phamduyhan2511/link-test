import BaseConsumer from '../../BaseComponent/BaseConsumer';
import React from 'react';
import { Button } from '@material-ui/core';
import DataTest from './DataTest';
import ehealth from '../../general/i3app';

export default class TestX extends BaseConsumer {
    constructor(props) {
        super(props);
        this._random = ehealth.guid.get();
    }

    _getData = (id)=>{
        //return 
    }

    _openDataTest = (id) => {
        this.confirm("abc",{
            okay: {
                title: 'ok',
                handle: ()=>{

                }
            },
            cancel: {
                title: 'cancel',
                handle:()=>{
                    
                }
            }
        })
        // this.openModal(() => {
        //     console.log("open test X", this.props.data);
        //     var data = this.props.data.ListX.find(i => i.id == id);
        //     return ({
        //         title: 'testX',
        //         body: <DataTest test={data} />
        //     })
        // })
    }

    consumerContent() {
        return (<React.Fragment>
            <div>{ehealth.guid.get()}</div>

            {this.props.data.ListX.map(item => {
                return <React.Fragment  key={"TestX_" + item.id}>
                    {JSON.stringify(item)}
                    <Button onClick={() => { this._openDataTest(item.id); }}>open Data</Button>
                </React.Fragment>

            })}
        </React.Fragment>
        )
    }

}
