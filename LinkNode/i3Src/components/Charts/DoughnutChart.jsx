import React from 'react';
import { _optionsDP, _legendDP, _doughnutDataset, _getRandomInt } from './DataChart.js';
import $ from 'jquery';
const immutable = require('object-path-immutable');
import DoughnutWithNumber from 'components/Charts/DoughnutWithNumber.jsx';
import { color } from '../../general/Color.js';
const Chart = window ? window.Chart : (global ? global.Window.Chart : null);
class DoughnutChart extends React.Component {
    constructor(props) {
        super(props);
    }


    defaultColor = () => {
        return ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(144, 230, 230)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)', 'rgb(201, 203, 207)']
    }

    render() {
        if (Object.entries(this.props.data).length == 0) return null;
        let { data, legend, options, ...others } = this.props;
        _optionsDP.title.text = this.props.data.title;
        var _doughnutDataset = immutable.merge(_doughnutDataset, "", $.extend(true, {}, this.props.data));
        var defaultColor = this.defaultColor();
        _doughnutDataset.backgroundColor = defaultColor;
        _doughnutDataset.hoverBackgroundColor = defaultColor;
        _doughnutDataset.hoverBorderColor = defaultColor;
        var doughnutDataWithNumber = {
            data: {
                datasets: [_doughnutDataset],//Datasets có thể có được nhiều data bên trong, mỗi data sẽ là 1 vòng doughnut
                //Thứ tự xuất hiện của các bộ data đi từ ngoài vào trong, data ở vị trí đầu tiên trong mảng sẽ là ngoài cùng.
                //Nếu data bên trong có cùng ref thì vòng doughnut của chart sẽ nhỏ lại và 2 bộ data sẽ chỉ render ra 1 vòng doughnut. Khuyến cáo không sài.
                labels: this.props.data.labels,//Tiêu đề ứng với mỗi data
                //Nếu ta muốn render số ở phần giữa của Doughnut, ta cần có 2 trường sau
                isHaveValueCenter: true,//Xác định có value hay ko. false thì chart sẽ không render text lên

            },// Dữ liệu vô của chart            
            legend: immutable.merge(_legendDP, "", $.extend(true, {}, this.props.legend)),
            options: immutable.merge(_optionsDP, "", $.extend(true, {}, this.props.options)),
        };
        return (
            <React.Fragment>
                <DoughnutWithNumber
                    data={doughnutDataWithNumber.data}
                    legend={doughnutDataWithNumber.legend}
                    options={doughnutDataWithNumber.options}
                    {...others}
                />
            </React.Fragment>
        );
    }
}



export default DoughnutChart;