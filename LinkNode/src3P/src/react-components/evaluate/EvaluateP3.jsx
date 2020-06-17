import Colors from "../../general/Color";
import React from 'react'
import { Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, withStyles } from "@material-ui/core"
import Button from "components/CustomButtons/Button";
import BaseConsumer from 'BaseComponent/BaseConsumer';

const styles = {
    title: {
        textAlign: "center",
        fontWeight: "bold"
    },
    radioGroup: {
        marginBottom: "10px"
    },
    radioItem: {
        marginLeft: "15px"
    },
    KIPname: {
        fontWeight: "bold"
    },
    evaluateButton: {
        textAlign: "right"
    }
}


class EvaluateP3 extends BaseConsumer {

    _handleChange = (event, KPI) => {
        this.updateObject(KPI, { value: parseInt(event.target.value) })

    }

    consumerContent() {
        const { classes, data } = this.props
        return (
            <Grid container>
                <Grid item xs={12} sm={12} md={12} className={classes.title}>Bạn có {data.KPI.length} KPI cần đánh giá:</Grid>

                {data.KPI.map((KPI, index) => {
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
            </Grid>
        )
    }
}

export default withStyles(styles)(EvaluateP3)