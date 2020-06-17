import Colors from "../../general/Color";
import React from 'react';
import { withStyles } from "@material-ui/core";
import Layout from "../../layout/Layout";
import ReactApexChart from "react-apexcharts"
import { Bar } from "react-chartjs-2";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = {}

class Statisticpage extends Layout {
    constructor(props) {
        super(props);
        this.pageTitle = "Thống kê";
    }

    renderBody() {
        const { classes, data } = this.props
        return (
            <React.Fragment>
                <ReactApexChart options={data.options} series={data.series} type="bar" height="350" />
                {/* <Bar options={data.options} data={data.data} width={600} height={800}/> */}

                <Paper style={{marginRight:"40px", marginLeft:"40px"}}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Tháng</TableCell>
                                <TableCell align="right">Lương</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.y.map(row => (
                                <TableRow key={row.name}>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="right">{row.total}.000.000</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Statisticpage)