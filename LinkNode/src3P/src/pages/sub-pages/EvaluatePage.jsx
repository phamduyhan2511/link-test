import Colors from "../../general/Color";
import React from 'react'
import Layout from "../../layout/Layout";
import { Grid, withStyles, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from "@material-ui/core"
import Button from "components/CustomButtons/Button";
import EvaluateP3 from "../../react-components/evaluate/EvaluateP3";
import EvaluateEmployee from "../../react-components/evaluate/EvaluateEmployee";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const styles = {
    title: {
        textAlign: "center",
        margin: "10px",
        fontSize: "20px"
    },
    radioGroup: {
        marginBottom: "10px"
    },
    radioItem: {
        marginLeft: "15px"
    },
    KIPname: {
        color: "blue",
        fontWeight: "bold"
    },
    evaluateButton: {
        textAlign: "right"
    },
    employeeName: {

    }
}

class EvaluatePage extends Layout {

    renderBody() {
        const { classes, data } = this.props
        return (
            <Grid container>
                <EvaluateP3 data={data} />
                <Grid item xs={12} sm={12} md={12} className={classes.title}>Bạn có <b>{data.employeeEvaluate.length}</b> nhân viên cần đánh giá/ duyệt:</Grid>
                {data.employeeEvaluate.map((employee, index) => {
                    return (
                        <React.Fragment key={"employee" + index}>

                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.employeeName}>{employee.name} ({employee.KPI.length} KPI, {employee.knowledge.length} bằng cấp) </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <EvaluateEmployee employee={employee} />
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </React.Fragment>

                    )
                })}

            </Grid>

        )
    }
}

export default withStyles(styles)(EvaluatePage)