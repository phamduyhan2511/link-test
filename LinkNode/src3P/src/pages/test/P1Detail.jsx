import React from "react";
import ReactDOM from 'react-dom';
import { BasePage } from 'BaseComponent/BasePage'
import P1Card from "../../componentschild/detailPage/P1Card";


class P1Detail extends BasePage {
    constructor(props) {
        super(props);
        this.state = {
            detail: [
                { name: "Hệ số Vị trí", value: 0.9 },
                { name: "Hiệu quả chuyên môn", value: 8 },
                { name: "Trọng số chuyên môn", value: 0.7 },
                { name: "Hiệu quả vận hành", value: 5 },
                { name: "Trọng số vận hành", value: 0.9 },
                { name: "Rủi ro pháp lý", value: 10 },
                { name: "Trọng số pháp lý", value: 1 },
                { name: "Phát triển hệ thống", value: 6 },
                { name: "Trọng số phát triển", value: 0.5 },
                { name: "Số ngày làm", value: 20 },
            ]
        }
    }
    childrenRender() {
       
        return (
            <div style={{marginTop: "30px"}}>
                
                <P1Card detail={this.state.detail}></P1Card>

            </div >
        );
    }
}



window.renderPage = (dom) => {
    ReactDOM.render(React.createElement(P1Detail), dom);
}