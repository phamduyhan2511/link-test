import React from 'react';
import BaseRouteWrapper from 'BaseComponent/BaseRouteWrapper';
import LabConfigPage from '../sub-pages/LabConfigPage';

export default class LabConfigWrapper extends BaseRouteWrapper {

    componentDidMount() {
        const x = {
            mode: 1,
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
                            isActive: false,
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
                            id: 3,
                            name: "Waidiana 003",
                            serial: "14-1015",
                            image: "/dist/Contents/img/diana.png",
                            isActive: false,
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
                    ]
                }
            ]
        };

        this.setData(x);
    }
wrapperContent() {
    const data = this.getData();
    return <LabConfigPage data={data} />
}
}