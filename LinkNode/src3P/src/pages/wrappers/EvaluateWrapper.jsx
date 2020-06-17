import React from 'react';
import BaseRouteWrapper from 'BaseComponent/BaseRouteWrapper';
import EvaluatePage from '../sub-pages/EvaluatePage';

export default class EvaluateWrapper extends BaseRouteWrapper {
    componentDidMount() {
        const x = {
            KPI: [
                {
                    name: "Khám bệnh",
                    criteria: [
                        { range: "Dưới 50 bệnh nhân", type: "C", value: 1000 },
                        { range: "Từ 50 đến 100 bệnh nhân", type: "B", value: 2000 },
                        { range: "Trên 100 bệnh nhân", type: "A", value: 3000 },
                    ],
                    duedate: "25/01/2020",
                    value: 0
                },
                {
                    name: "Viết bài báo khoa học",
                    criteria: [
                        { range: "Viết 0 bài báo khoa học", type: "C", value: 1000 },
                        { range: "Viết 1 bài báo khoa học", type: "B", value: 2000 },
                        { range: "Viết 2 bài báo khoa học", type: "A", value: 3000 },
                    ],
                    duedate: "20/2/2020",
                    value: 0
                },
            ],
            employeeEvaluate: [
                {
                    name: "Nguyễn Thị A",
                    KPI: [
                        {
                            name: "Chăm sóc bệnh nhân",
                            criteria: [
                                { range: "Dưới 20 bệnh nhân", type: "C", value: 1000 },
                                { range: "Từ 20 đến 40 bệnh nhân", type: "B", value: 2000 },
                                { range: "Trên 40 bệnh nhân", type: "A", value: 3000 },
                            ],
                            duedate: "25/01/2020",
                            value: 0
                        },
                    ],
                    knowledge: []
                },
                {
                    name: "Trần Văn C",
                    KPI: [
                        {
                            name: "Chăm sóc bệnh nhân",
                            criteria: [
                                { range: "Dưới 20 bệnh nhân", type: "C", value: 1000 },
                                { range: "Từ 20 đến 40 bệnh nhân", type: "B", value: 2000 },
                                { range: "Trên 40 bệnh nhân", type: "A", value: 3000 },
                            ],
                            duedate: "25/01/2020",
                            value: 0
                        },
                    ],
                    knowledge: []
                },
                {
                    name: "Lý Quốc Thạnh",
                    KPI: [
                        {
                            name: "Doanh số bán thuốc",
                            criteria: [
                                { range: "Dưới 1 tỷ", type: "C", value: 1000 },
                                { range: "Từ 1 đến 2 tỷ", type: "B", value: 2000 },
                                { range: "trên 2 tỷ", type: "A", value: 3000 },
                            ],
                            duedate: "25/01/2020",
                            value: 0
                        },
                        {
                            name: "Doanh số dịch vụ",
                            criteria: [
                                { range: "Dưới 1000 ca", type: "C", value: 1000 },
                                { range: "Từ 1000 ca đến 2000 ca", type: "B", value: 2000 },
                                { range: "trên 2000 ca", type: "A", value: 3000 },
                            ],
                            duedate: "25/01/2020",
                            value: 0
                        },
                    ],
                    knowledge: [
                        { name: "Bằng TOEIC 700", proof: "file ảnh/ scan bằng cấp" }
                    ]
                }
            ]
        }
        this.setData(x);
    }
    wrapperContent() {
        const data = this.getData();
        return (
                <EvaluatePage data={data} />
        )
    }
}