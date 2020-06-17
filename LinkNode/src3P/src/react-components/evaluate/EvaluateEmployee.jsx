import Colors from "../../general/Color";
import React from 'react'
import { Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Checkbox, Radio, withStyles } from "@material-ui/core";
import Button from "components/CustomButtons/Button";
import BaseConsumer from 'BaseComponent/BaseConsumer';

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
}


class EvaluateEmployee extends BaseConsumer {

    _handleChange = (event, KPI) => {
        this.updateObject(KPI, { value: parseInt(event.target.value) })

    }

    consumerContent() {
        const { classes, employee } = this.props
        return (
            <React.Fragment>
                <Grid container>
                    {employee.KPI.map((KPI, index) => {
                        return (
                            <React.Fragment key={"KPI" + index}>
                                <Grid item xs={12} sm={12} md={12} className={classes.radioGroup}>
                                    <FormControl >
                                        <FormLabel className={classes.KIPname}>{KPI.name}</FormLabel>
                                        <RadioGroup aria-label="position" name="position" value={KPI.value} onChange={() => { this._handleChange(event, KPI) }} row>
                                            {KPI.criteria.map((criteria, index) => {
                                                return (
                                                    <FormControlLabel key={"criteria" + index} className={classes.radioItem}
                                                        value={criteria.value}
                                                        control={<Radio color="primary" />}
                                                        label={criteria.type + ". " + criteria.range}
                                                        labelPlacement="end"
                                                    />
                                                )
                                            })}


                                        </RadioGroup>
                                    </FormControl>
                                </Grid>

                            </React.Fragment>
                        )
                    })}
                    <Grid item xs={12} sm={12} md={12} className={classes.evaluateButton}><Button color="primary">Đánh giá</Button></Grid>

                    {employee.knowledge.map((knowledge, index) => {
                        return (
                            <Grid item key={"knowledge" + index} container xs={12} sm={12} md={12} className={classes.radioGroup}>
                                <Grid item xs={7} sm={7} md={7}> 
                                <FormControlLabel
                                    aria-label="Acknowledge"
                                    onClick={event => event.stopPropagation()}
                                    onFocus={event => event.stopPropagation()}
                                    control={<Checkbox />}
                                    label={knowledge.name}
                                /></Grid>
                                <Grid item xs={5} sm={5} md={5}>{knowledge.proof}</Grid>
                                <Grid item xs={12} sm={12} md={12} className={classes.evaluateButton}><Button color="dribbble">Duyệt</Button></Grid>
                            </Grid>
                        )
                    })}
                </Grid>
            </React.Fragment>

        )
    }
}

export default withStyles(styles)(EvaluateEmployee)