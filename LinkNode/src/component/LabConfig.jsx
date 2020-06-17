import React from 'react';
import ReactDOM from 'react-dom'
import BaseConsumer from "BaseComponent/BaseConsumer";
import { withStyles } from '@material-ui/core';
import LinkTab from '../component/LinkTab';
import Colors from '../general/Colors'
import LisTab from '../component/LisTab'
import LabTab from '../component/LabTab';
import AnalyserTab from '../component/AnalyserTab';

class LabConfig extends BaseConsumer {
    constructor(props) {
        super(props)
        // this.state = {
        //     mode: 1,
        //     listTab: [
        //         { name: "LABS", id: 1 },
        //         { name: "ANALYSER", id: 2 },
        //         { name: "LIS", id: 3 }
        //     ],
        //     listLab: [
        //         {
        //             id: 1,
        //             name: "Lab 1",
        //             priority: 1,
        //             listAnalyser: [
        //                 {
        //                     id: 1,
        //                     name: "Erytra 0984",
        //                     serial: "0984",
        //                     image: "/dist/Contents/img/erytra.jpg",
        //                     isActive: true,
        //                 },
        //                 {
        //                     id: 2,
        //                     name: "DGReader",
        //                     serial: "1560",
        //                     image: "/dist/Contents/img/dgreader.png",
        //                     isActive: false,
        //                 },
        //                 {
        //                     id: 3,
        //                     name: "Waidiana",
        //                     serial: "57-0694",
        //                     image: "/dist/Contents/img/diana.png",
        //                     isActive: true,
        //                 },
        //                 {
        //                     id: 4,
        //                     name: "Crystal Circle",
        //                     serial: "8888",
        //                     image: "/dist/Contents/img/erytra.jpg",
        //                     isActive: true,
        //                 },
        //             ],
        //             listLis: [
        //                 {
        //                     id: 1,
        //                     name: "LIS_FILE 1",
        //                     isMirror: true,
        //                     image: "/dist/Contents/img/folder.png",
        //                     isActive: true,
        //                 },
        //                 {
        //                     id: 2,
        //                     name: "LIS_FILE 2",
        //                     isMirror: false,
        //                     image: "/dist/Contents/img/folder.png",
        //                     isActive: true,
        //                 },
        //             ]
        //         },
        //         {
        //             id: 2,
        //             name: "Lab Test",
        //             priority: 14,
        //             listAnalyser: [
        //                 {
        //                     id: 1,
        //                     name: "Test 001",
        //                     serial: "1234",
        //                     image: "/dist/Contents/img/erytra.jpg",
        //                     isActive: true,
        //                 },
        //                 {
        //                     id: 3,
        //                     name: "Waidiana 003",
        //                     serial: "14-1015",
        //                     image: "/dist/Contents/img/diana.png",
        //                     isActive: false,
        //                 },
        //             ],
        //             listLis: [
        //                 {
        //                     id: 1,
        //                     name: "Lis-Item 1",
        //                     isMirror: true,
        //                     image: "/dist/Contents/img/folder.png",
        //                     isActive: true,
        //                 },
        //             ]
        //         }
        //     ]
        // },
            this.title = "Lab configuration"
    }

    _onClickTab = (value) => {
        // this.setState({ mode: value })
        this.updateObject(this.props.data, {mode: value}, ()=>{console.log(this.props.data)})
    }

    consumerContent() {
        const { classes } = this.props;
        return (
            <div style={{padding: "0rem 1rem"}}>
                <div className={classes.title}>
                    <div style={{ paddingRight: "12px" }}>
                        {this.title}
                    </div>
                </div>
                <LinkTab
                    listTab={this.props.data.listTab}
                    color={Colors.blue}
                    onClickTab={this._onClickTab}
                    value={this.props.data.mode}
                />
                <div className={classes.tabItem}>
                    {this.props.data.mode == 1 ? <LabTab listLab={this.props.data.listLab} /> :
                        this.props.data.mode == 2 ? < AnalyserTab listLab={this.props.data.listLab} /> :
                            < LisTab  listLab={this.props.data.listLab}/>}
                </div>
            </div>
        );
    }
}

const styles = {
    title: {
        height: "60px",
        display: "flex",
        padding: "1rem 0",
        fontSize: "1.8rem",
        alignItems: "center",
        fontWeight: "400",
        lineHeight: "1.09",
    },
    tabItem: {
        margin: "1rem 0px",
    }
}

export default withStyles(styles)(LabConfig)
