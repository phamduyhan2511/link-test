import React from 'react';
import { _optionsDP, _legendDP, _barDataset, _barDataset2 } from './DataChart.js';
import $ from 'jquery';
import { Bar, HorizontalBar } from 'react-chartjs-2';
const immutable = require('object-path-immutable');
const ReactChart = window ? window.Chart : (global ? global.Window.Chart : null);

class BarChart extends React.Component {
    constructor(props) {
        super(props);
        //-----------------------BAR CHART ----------------------------
        const _self = this;
        var originalBarDraw = ReactChart.controllers.bar.prototype.draw;
        ReactChart.helpers.extend(ReactChart.controllers.bar.prototype, {
            draw: function () {
                originalBarDraw.apply(this, arguments);
                var chart = this.chart;
                var ctx = chart.chart.ctx;
                var fontSize = ReactChart.defaults.global.defaultFontSize + 5;
                ctx.font = ReactChart.helpers.fontString(fontSize, ReactChart.defaults.global.defaultFontStyle, ReactChart.defaults.global.defaultFontFamily);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                var data = this.getMeta().data;
                var type = chart.config.type;
                data.forEach((dataset, index) => {
                    if (dataset._model && this._data[index] > 0) {
                        if (type === 'horizontalBar') {
                            var scaleX_max = dataset._xScale.maxWidth;
                            var x = Math.abs((scaleX_max - dataset._model.x)) / scaleX_max >= 0.25 ? dataset._model.x + 30 : dataset._model.x - 30;
                            var y = dataset._model.y + 10;
                            ctx.fillText(this._data[index], x, y);
                        }
                        else {
                            var scaleY_max = dataset._yScale.maxHeight;
                            var x = dataset._model.x;
                            var y = Math.abs((scaleY_max - dataset._model.y)) / scaleY_max >= 0.25 ? dataset._model.y + 25 : dataset._model.y - 15;
                            ctx.fillText(this._data[index], x, y);
                        }
                    }
                })
            }
        });

    }
    defaultColor = (value) => {
        return [`rgba(255, 99, 132,${value})`, `rgba(255, 159, 64,${value})`, `rgba(255, 205, 86,${value})`, `rgba(144, 230, 230,${value})`, `rgba(75, 192, 192,${value})`, `rgba(54, 162, 235,${value})`, `rgba(153, 102, 255,${value})`, `rgba(201, 203, 207,${value})`]
    }
    render() {
        if (Object.entries(this.props.data).length == 0) return null;
        var { data, xAxesTitle, yAxesTitle, title, options, legend, isHorizontalBar, ...others } = this.props;
        var _optionsBar = {
            title: $.extend(true, {}, _optionsDP.title),
            barPercentage: 0.9,//chiều rộng của mỗi bar so với chiều rộng khối chứa nó.
            categoryPercentage: 0.8,//
            //barThickness: 10, //Đặt thủ công chiều rộng của bar. Tham khảo: https://www.chartjs.org/docs/latest/charts/bar.html#barthickness
            //maxBarThickness: 12,// Đặt giới hạn cho kích thước của các Bar ko vượt quá giá trị được đặt.
            gridLines: {
                offsetGridLines: true,
            },//
            scales: {
                xAxes: [{
                    stacked: false,
                    scaleLabel: {
                        display: true,
                        labelString: this.props.xAxesTitle
                    },
                    ticks: {
                        beginAtZero: true,
                    }
                }],
                yAxes: [{
                    stacked: false,
                    scaleLabel: {
                        display: true,
                        labelString: this.props.yAxesTitle
                    },
                    ticks: {
                        beginAtZero: true,

                    }
                }]
            },//Có thể chuyển thành Stacked Bar Chart bằng cách set 2 trường "xAxes" va "yAxes".
        };
        _optionsBar.title.text = this.props.data.title;
        _optionsBar = immutable.merge(_optionsBar, "", this.props.options)
        var _legendBar = $.extend(true, {}, _legendDP);
        _legendBar = immutable.merge(_legendBar, "", this.props.legend);
        var defaultColor = this.defaultColor(0.7);
        var defaultColorHover = this.defaultColor(1);

        var data = {
            labels: this.props.data.labels,
            datasets: this.props.data.datasets.map((i, index) => {
                i.backgroundColor = defaultColor[index];
                i.borderColor = defaultColor[index];
                i.hoverBackgroundColor = defaultColorHover[index];
                i.hoverBorderColor = defaultColorHover[index];
                return { ..._barDataset, ...i };
            })
        }
        console.log(_optionsBar, _legendBar, data)
        return (
            <React.Fragment>
                {
                    isHorizontalBar == true ?
                        <HorizontalBar
                            data={data}
                            legend={_legendBar}
                            options={_optionsBar}
                            {...others}
                        />
                        : <Bar
                            data={data}
                            legend={_legendBar}
                            options={_optionsBar}
                            {...others}
                        />
                }
            </React.Fragment>
        );
    }
}



export default BarChart;