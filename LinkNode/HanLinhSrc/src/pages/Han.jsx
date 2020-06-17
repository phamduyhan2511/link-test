import React from 'react';
import ReactDOM from 'react-dom'
import { BasePage } from "BaseComponent/BasePage";
import { withStyles } from '@material-ui/core';
import LinkTab from '../component/LinkTab';
import Colors from '../general/Colors'

import AnalyserItem from '../component/AnalyserItem';
import LabInfo from '../component/LabInfo';

class Han extends BasePage {
    constructor(props) {
        super(props)
        this.state = {
            listTab: [
                { name: "LABS", id: 1 },
                { name: "ANALYSER", id: 2 },
                { name: "LIS", id: 3 }
            ],
            listLab: [
                {
                    id: 1,
                    name: "Lab 1",
                    priority: 1,
                    listAnalyser: [
                        {
                            id: 1,
                            name: "Erytra 0984",
                            serial: "0984",
                            image: "/dist/Contents/img/erytra.jpg",
                            isActive: true,
                        },
                        {
                            id: 2,
                            name: "DGReader",
                            serial: "1560",
                            image: "/dist/Contents/img/dgreader.png",
                            isActive: true,
                        },
                        {
                            id: 3,
                            name: "Waidiana",
                            serial: "57-0694",
                            image: "/dist/Contents/img/diana.png",
                            isActive: true,
                        },
                        {
                            id: 4,
                            name: "Crystal Circle",
                            serial: "8888",
                            image: "/dist/Contents/img/erytra.jpg",
                            isActive: true,
                        },
                    ],
                    listLis: [
                        {
                            id: 1,
                            name: "LIS_FILE 1",
                            isMirror: true,
                            image: "/dist/Contents/img/folder.png",
                            isActive: true,
                        },
                        {
                            id: 2,
                            name: "LIS_FILE 2",
                            isMirror: false,
                            image: "/dist/Contents/img/folder.png",
                            isActive: true,
                        },
                    ]
                },
                {
                    id: 2,
                    name: "Lab Test",
                    priority: 14,
                    listAnalyser: [
                        {
                            id: 1,
                            name: "Test 001",
                            serial: "1234",
                            image: "/dist/Contents/img/erytra.jpg",
                            isActive: true,
                        },
                        {
                            id: 2,
                            name: "DGR 002",
                            serial: "4321",
                            image: "/dist/Contents/img/dgreader.png",
                            isActive: true,
                        },
                        {
                            id: 3,
                            name: "Waidiana 003",
                            serial: "14-1015",
                            image: "/dist/Contents/img/diana.png",
                            isActive: true,
                        },
                        {
                            id: 4,
                            name: "Crystal Circle 004",
                            serial: "2486",
                            image: "/dist/Contents/img/erytra.jpg",
                            isActive: true,
                        },
                    ],
                    listLis: [
                        {
                            id: 1,
                            name: "Lis-Item 1",
                            isMirror: true,
                            image: "/dist/Contents/img/folder.png",
                            isActive: true,
                        },
                        {
                            id: 2,
                            name: "Lis-Item 2",
                            isMirror: false,
                            image: "/dist/Contents/img/folder.png",
                            isActive: true,
                        },
                    ]
                }
            ]
        }
    }
    childrenRender() {
        return (
            <React.Fragment>aa
                <LinkTab listTab={this.state.listTab} color={Colors.blue} />
                {this.state.listLab.map(i => {
                    return (
                        <LabInfo
                            key={i.id}
                            name={i.name}
                            id={i.id}
                            priority={i.priority}
                            listAnalyser={i.listAnalyser}
                            listLis={i.listLis}
                        />
                    )
                })}
            </React.Fragment>
        );
    }
}

const styles = {

}

window.renderPage = (dom, props) => {
    ReactDOM.render(React.createElement(withStyles(styles)(Han)), dom);
}
