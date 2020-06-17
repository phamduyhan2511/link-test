import React from 'react';
import BaseRouteWrapper from 'BaseComponent/BaseRouteWrapper';
import TaskPage from '../sub-pages/TaskPage';

export default class TaskWrapper extends BaseRouteWrapper {    
    wrapperContent() {
        const data = this.getData();
        return <TaskPage data={data} />
    }

    componentDidMount() {
        let now = new Date();
        let fromDate = new Date(now.getFullYear(), now.getMonth(), 1);
        let toDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        const x = {
            calendarSearch: {
                fromDate: fromDate,
                toDate: toDate,
                dateChosen: now, 
            },
            taskList: [
                {id: 1, name: "Photocopy tài liệu", fromDate: now.addDays(-1), toDate: now.addDays(-1), type: 1},
                {id: 2, name: "Soạn slide powerpoint thuyết trình", fromDate: now, toDate: now, type: 1},
                {id: 3, name: "Ôn tập Toeic", fromDate: now.addDays(1), toDate: now.addDays(1), type: 2},
                {id: 4, name: "Rà soát cơ sở vật chất", fromDate: now.addDays(2), toDate: now.addDays(2), type: 1},
                {id: 4, name: "Thi Toeic", fromDate: now.addDays(3), toDate: now.addDays(3), type: 2},
                {id: 5, name: "Họp giao ban", fromDate: now.addDays(4), toDate: now.addDays(4), type: 2},
                {id: 5, name: "Hướng dẫn sử dụng phần mềm quản lý", fromDate: now.addDays(5), toDate: now.addDays(5), type: 1}
            ]
        }
        this.setData(x);
    }
}