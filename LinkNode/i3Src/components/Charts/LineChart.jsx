import React from 'react';
import { _optionsDP, _legendDP, _lineDataset } from './DataChart.js';
import $ from 'jquery';
import { Line } from 'react-chartjs-2';
const immutable = require('object-path-immutable');
import PropTypes from "prop-types";

class LineChart extends React.Component {
    constructor(props) {
        super(props);
        //----LINE CHART----

    }
    defaultColor = () => {
        return ['rgb(255, 99, 132)', 'rgb(75, 192, 192)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(144, 230, 230)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)', 'rgb(201, 203, 207)']
    }

    render() {
        if (Object.entries(this.props.data).length == 0) return null;
        var { data, yAxesTitle, xAxesTitle, options, legend, dot, lineTension, ...others } = this.props;
        var _optionsLine = {
            title: $.extend(true, {}, _optionsDP.title),
            showLines: true,//Quy định sẽ hiện tất cả line hoặc không.
            //spanGaps: false,//tương ứng với "spanGrap trong Dataset tuy nhiên phạm vi áp dụng là toàn chart
            scales: {
                yAxes: [{
                    stacked: false,
                    scaleLabel: {
                        display: true,
                        labelString: this.props.yAxesTitle
                    }

                }],
                xAxes: [{
                    stacked: false,
                    scaleLabel: {
                        display: true,
                        labelString: this.props.xAxesTitle
                    }

                }]
            },//Biểu đồ đường có thể chuyển thành biểu đồ vùng xếp chồng bằng cách thay đổi trường này thành true.
        }
        _optionsLine.title.text = this.props.data.title;
        _optionsLine = immutable.merge(_optionsLine, "", this.props.options)
        var _legendLine = $.extend(true, {}, _legendDP);
        _legendLine.position = "right";
        _legendLine = immutable.merge(_legendLine, "", this.props.legend);
        var defaultColor = this.defaultColor();
        var data = {
            labels: this.props.data.labels,
            datasets: this.props.data.datasets.map((i, index) => {
                i.backgroundColor = defaultColor[index];
                i.borderColor = defaultColor[index];
                i.pointHoverBackgroundColor = defaultColor[index];
                i.pointHoverBorderColor = defaultColor[index];
                dot === false ? i.pointRadius = 0 : null;
                lineTension ? i.lineTension = lineTension : null;
                return { ..._lineDataset, ...i };
            })
        }
        // console.log(...others);
        return (
            <React.Fragment>
                <Line
                    data={data}
                    legend={_legendLine}
                    options={_optionsLine}
                    {...others}
                />
            </React.Fragment>
        );
    }
}


LineChart.propTypes = {
    title: PropTypes.string,
    xAxesTitle: PropTypes.string.isRequired,
    yAxesTitle: PropTypes.string.isRequired,
    options: PropTypes.object,
    legend: PropTypes.object,
    data: PropTypes.object.isRequired
}



export default LineChart;