import Colors from "../../general/Color";
import BaseConsumer from 'BaseComponent/BaseConsumer';
import React from 'react'
import Layout from "../../layout/Layout";
import { withStyles } from "@material-ui/core";
import P1 from "../../react-components/ppp/P1";
import P2 from "../../react-components/ppp/P2";
import P3 from "../../react-components/ppp/P3";
import Summary3P from "../../react-components/ppp/Summary3P";


export default class PPPPage extends Layout {
    constructor(props){
        super(props);
        this.pageTitle = "3P Salary";
    }
    renderBody() {
        return (
            <div>
                <Summary3P/>
                <P1  data={this.props.data} />
                <P2  data={this.props.data} />
                <P3  data={this.props.data} />

            </div>
        )
    }
}