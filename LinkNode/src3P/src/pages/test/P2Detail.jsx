import React from "react";
import ReactDOM from 'react-dom';
import {BasePage} from 'BaseComponent/BasePage'
import { withStyles} from "@material-ui/core";
import P2Card from "../../componentschild/detailPage/P2Card.jsx";
import TaskCard from "../../componentschild/TaskCard/taskCard.jsx";


class P2Detail extends BasePage {
    constructor(props) {
        super(props);
        this.state = {
            tabsValue: {value: 0},
            knowledge: [
                { name: "Bác sĩ đa khoa", type: 0, value: 9 },
                { name: "Bác sĩ tâm lí", type: 0, value: 8 },
                { name: "Giao tiếp", type: 1, value: 6 },
                { name: "Thuyết trình", type: 2, value: 5 },
                { name: "Chẩn bệnh", type: 0, value: 9 },
                { name: "Anh Văn Giao Tiếp", type: 1, value: 5 },
                { name: "Làm việc nhóm", type: 2, value: 10 },
            ]
        }
    }

    childrenRender() {
        const { classes } = this.props
        return (
            <div style={{marginTop: "30px"}}>
                
                <P2Card tabsValue={this.state.tabsValue} knowledge={this.state.knowledge}></P2Card>
                <TaskCard />
            </div >
        );
    }
}

const useStyles =  {}

window.renderPage = (dom) => {
    ReactDOM.render(React.createElement(withStyles(useStyles)(P2Detail)), dom);
}