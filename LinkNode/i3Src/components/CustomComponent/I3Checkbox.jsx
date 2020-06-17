import React from 'react'
import BaseConsumer from '../../BaseComponent/BaseConsumer.jsx';
import { withStyles, FormControlLabel, Checkbox, FormGroup, RadioGroup, Radio } from '../../../i3NodeModules/@material-ui/core';
import PropTypes from "prop-types";

import customCheckboxRadioSwitch from "customCheckboxRadioSwitch.jsx";

class I3Checkbox extends BaseConsumer {
    constructor(props) {
        super(props)
    }

    // _handleChange = (data) => {
    //     this.props.onChange(data);
    // }

    _radioChange = (event) => {
        let data = this.props.options.find(i => (i[this.props.valueKey].toString() === event.target.value));
        this.props.onChange(data);
    }

    consumerContent = () => {
        const {
            classes,
            value,
            options,
            valueKey,
            labelKey,
            formControlLabelProps,
            multiple,
            checkBoxProps,
            formGroupProps,
            radioProps,
            radioGroupProps,
            disableFlex
        } = this.props;
        return (
            <React.Fragment>
                {multiple ?
                    <FormGroup className={disableFlex?classes.disableFlex:null} {...formGroupProps}>
                        {
                            options.map((val, index) => {
                                return (
                                    <FormControlLabel key={val[valueKey]}
                                        control={
                                            <Checkbox checked={value.findIndex(e => (e[valueKey] === val[valueKey])) > -1}
                                                onChange={() => {this.props.onChange(val) }} value={val[valueKey]}
                                                {...checkBoxProps}
                                            />
                                        }
                                        label={val[labelKey]}
                                        {...formControlLabelProps}
                                    />
                                )
                            })
                        }
                    </FormGroup> :
                    <RadioGroup
                        className={classes.group}
                        value={value[valueKey] != undefined && value[valueKey] != null  ? value[valueKey].toString(): ''}
                        onChange = {this._radioChange}
                        {...radioGroupProps}
                    >
                        {
                            options.map((val, index) => {
                                return (
                                    <FormControlLabel key={val[valueKey]}
                                    value={val[valueKey].toString()}
                                        control={
                                            <Radio
                                            {...radioProps}
                                            />
                                        }
                                        label={val[labelKey]}
                                        {...formControlLabelProps}
                                    />
                                )
                            })
                        }
                    </RadioGroup>
                }
            </React.Fragment>
        )
    }
}

I3Checkbox.defaultProps = {
    multiple: true
}

I3Checkbox.propTypes = {
    formControlLabelProps: PropTypes.object,
    formGroupProps: PropTypes.object,
    checkBoxProps: PropTypes.object,
    multiple: PropTypes.bool,
    radioProps: PropTypes.object,
    radioGroupProps: PropTypes.object,

    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    value: PropTypes.object.isRequired,
    valueKey: PropTypes.string.isRequired,
    labelKey: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
const styles = {
    disableFlex: {
        'display': 'block !important'
    }
}
export default withStyles({...styles, ...customCheckboxRadioSwitch})(I3Checkbox)