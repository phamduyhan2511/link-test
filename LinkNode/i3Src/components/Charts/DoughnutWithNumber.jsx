import React from 'react';
import ReactDOM from 'react-dom';
import { Doughnut } from "react-chartjs-2";
const ReactChart = window ? window.Chart : (global ? global.Window.Chart : null);
export default class DoughnutWithNumber extends Doughnut {
    constructor(props) {
        super(props);
        var _roundNumberTwoPoint = (x) => {
            var n = parseFloat(x);
            return Math.round(n * 100) / 100;
        }
        var originalDoughnutDraw = ReactChart.controllers.doughnut.prototype.draw;
        ReactChart.helpers.extend(ReactChart.controllers.doughnut.prototype, {

            draw: function () {
                originalDoughnutDraw.apply(this, arguments);
                var chart = this.chart;
                var ctx = chart.chart.ctx;
                var dataset0 = chart.config.data.datasets["0"];
                var data = this.getMeta().data;
                var _currentData = data.filter(i => i.hidden == false);
                var _total = 0;
                for (var i = 0; i < _currentData.length; i++) {
                    _total += dataset0.data[_currentData[i]._index];
                };
                if (!dataset0.__total) dataset0.__total = 0;
                if (arguments[0] === 1) dataset0.__total = _total;
                _total = _roundNumberTwoPoint(dataset0.__total + (_total - dataset0.__total));
                var x = (chart.chartArea.left + chart.chartArea.right) / 2;
                var y = (chart.chartArea.top + chart.chartArea.bottom) / 2;
                var fontSize = chart.innerRadius - 30 + "px";
                ctx.save();
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = chart.options.totalColor;
                ctx.font = ctx.font.replace(/\d+px/, fontSize);
                ctx.fillText(_total, x, y);
                ctx.restore();
            }
        });
    }

}