import React from 'react';
import BaseRouteWrapper from 'BaseComponent/BaseRouteWrapper';
import DashboardPage from '../sub-pages/DashboardPage';

export default class DashboardWrapper extends BaseRouteWrapper {    
    wrapperContent() {
        const data = this.getData();
        return <DashboardPage data={data} />
    }

    componentDidMount() {
        let now = new Date();
        let deadlineDefault = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, now.getHours(), 0, 0);

        const x = {
            a: {
                pagingData: {
                    pageSize: 15,
                    pageIndex: 1,
                },
                filter: {
                    date: null,
                }
            },
            b: {},
            upcomingTask: [
                {
                    type: 1,
                    name: "Công việc được giao",
                    icon: "far fa-list-alt",
                    items:
                        [
                            {id: 1, name: "Photo tài liệu triển khai", deadlineTime: deadlineDefault},
                            {id: 2, name: "Hoàn thành slide trình bày", deadlineTime: deadlineDefault},
                        ]
                },
                {
                    type: 2,
                    name: "Kế hoạch cá nhân",
                    icon: "fas fa-check",
                    items:
                        [
                            {id: 1, name: "Kiểm tra cơ sở vật chất",value: "75%" , deadlineTime: deadlineDefault},
                        ]
                },
                {
                    type: 3,
                    name: "Tiến độ KPI",
                    icon: "fas fa-tasks",
                    items:
                        [
                            {id: 1, name: "Khám 100 bệnh nhân",value: "80%", deadlineTime: deadlineDefault},
                        ]
                }
            ]
        }
        this.setData(x);
    }
}