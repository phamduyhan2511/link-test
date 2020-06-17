import React from 'react';
import BaseRouteWrapper from 'BaseComponent/BaseRouteWrapper';
import Statisticpage from '../sub-pages/Statisticpage';
import { paths } from "../../general/routes";
import Color from "../../general/Color"
import Colors from '../../general/Color';
import { BottomNavigation } from '../../../i3NodeModules/@material-ui/core';
import $ from 'jquery'
export default class StatisticWrapper extends BaseRouteWrapper {

    componentDidMount() {
        const x = {
            options: {
                chart: {
                    stacked: true,
                    toolbar: {
                        show: false
                    },

                },
                plotOptions: {
                    bar: {
                        horizontal: false,

                    },

                },

                stroke: {
                    width: 1,
                    colors: ['#fff']
                },

                title: {
                    text: 'BIỂU ĐỒ LƯƠNG 6 THÁNG GẦN NHẤT',
                    align: "center",
                    style: {
                        color: "green",
                        fontWeight: "bold"
                    }

                },
                xaxis: {
                    categories: ["6/2019", "7/2019", "8/2019", "9/2019", "10/2019", "11/2019"],
                    labels: {
                        
                        events: {
                            click: function () {
                               console.log(123)
                            }
                        }
                    },

                },
                yaxis: {
                    title: {
                        text: undefined
                    },

                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + "đ"
                        }
                    }
                },
                fill: {
                    opacity: 10
                },

                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                    offsetX: 40,
                    onItemClick: {
                        toggleDataSeries: true
                    },
                    onItemHover: {
                        highlightDataSeries: true
                    },
                },
                colors: [Colors.p1, Colors.p2, Colors.p3],


            },
            series: [
                { name: 'P1', data: [18, 18, 18, 17, 17, 16] },
                { name: 'P2', data: [20, 20, 22, 22, 22, 23] },
                { name: 'P3', data: [25, 12, 30, 23, 28, 24] }
            ],

            y: [
                { name: '6/2019', total: 44 },
                { name: '7/2019', total: 52 },
                { name: '8/2019', total: 49 },
                { name: '9/2019', total: 47 },
                { name: '10/2019', total: 56 },
                { name: '11/2019', total: 45 },
            ]

            // data: {
            //     labels: ['4/2019', '5/2019', '6/2019', '7/2019', '8/2019', '9/2019'],
            //     datasets: [
            //         {
            //             label: "P1",
            //             backgroundColor: Colors.p1,
            //             data: [12, 13, 13, 13, 13, 13],

            //         },
            //         {
            //             label: "P2",
            //             backgroundColor: Colors.p2,
            //             data: [10, 10, 11, 11, 12, 13]
            //         },
            //         {
            //             label: "P3",
            //             backgroundColor: Colors.p3,
            //             data: [23, 21, 17, 29, 21, 18]
            //         }
            //     ]
            // },
            // options: {
            //     legend: {
            //         display: true,
            //         position: "bottom"
            //     },
            //     scales: {
            //         yAxes: [{
            //             stacked: true
            //         }],
            //         xAxes: [{
            //             stacked: true
            //         }]
            //     },
            //     title: {
            //         display: true,
            //         position: "top",
            //         text: 'BIỂU ĐỒ LƯƠNG 6 THÁNG GẦN NHẤT',
            //         fontSize: 15,
            //         fontColor: "green",
            //         fontStyle: "bold"

            //     },

            //     responsive: true,

            //     dataLabels:{

            //         }
            //     }

        }
        this.setData(x);

    }
    wrapperContent() {
        const data = this.getData();
        return <Statisticpage data={data} />
    }
}