import React from 'react';
import BaseConsumer from 'BaseComponent/BaseConsumer';
import { withStyles, Grid, FormControl, InputLabel, Select, MenuItem, TextField } from '@material-ui/core'
import PictureUpload from 'components/CustomUpload/ImageUpload';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CustomInput from 'components/CustomInput/CustomInput'
import Button from 'components/CustomButtons/Button'
import Clearfix from 'components/Clearfix/Clearfix';
import {
    primaryColor,
    primaryBoxShadow,
    whiteColor,
    blackColor,
    grayColor,
    hexToRgb
} from "../../assets/jss/material-dashboard-pro-react.js";




const style = theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),

    },
    updateProfileButton: {
        float: "right"
    }, select: {
        padding: "12px 0 7px",
        fontSize: ".75rem",
        fontWeight: "400",
        lineHeight: "1.42857",
        textDecoration: "none",
        textTransform: "uppercase",
        color: grayColor[2],
        letterSpacing: "0",
        "&:focus": {
            backgroundColor: "transparent"
        },
        "&[aria-owns] + input + svg": {
            transform: "rotate(180deg)"
        },
        "& + input + svg": {
            transition: "all 300ms linear"
        }
    },
    selectFormControl: {
        margin: "7px 0 17px 0 !important",
        "& > div": {
            "&:before": {
                borderBottomWidth: "1px !important",
                borderBottomColor: grayColor[4] + "!important"
            },
            "&:after": {
                borderBottomColor: primaryColor[0] + "!important"
            }
        }
    },
    selectLabel: {
        fontSize: "20px",
        textTransform: "uppercase",
        color: grayColor[2] + " !important",
        top: "0px"
    },
    selectMenu: {
        "& > div > ul": {
            border: "0",
            padding: "5px 0",
            margin: "0",
            boxShadow: "none",
            minWidth: "100%",
            borderRadius: "4px",
            boxSizing: "border-box",
            display: "block",
            fontSize: "14px",
            textAlign: "left",
            listStyle: "none",
            backgroundColor: whiteColor,
            backgroundClip: "padding-box"
        },
        "& $selectPaper $selectMenuItemSelectedMultiple": {
            backgroundColor: "inherit"
        },
        "& > div + div": {
            maxHeight: "266px !important"
        }
    },
    selectMenuItem: {
        fontSize: "13px",
        padding: "10px 20px",
        margin: "0 5px",
        borderRadius: "2px",
        transition: "all 150ms linear",
        display: "block",
        clear: "both",
        fontWeight: "400",
        lineHeight: "2",
        whiteSpace: "nowrap",
        color: grayColor[7],
        paddingRight: "30px",
        "&:hover": {
            backgroundColor: primaryColor[0],
            color: whiteColor,
            ...primaryBoxShadow
        }
    },
    selectMenuItemSelected: {
        backgroundColor: primaryColor[0] + "!important",
        color: whiteColor
    },
    selectMenuItemSelectedMultiple: {
        backgroundColor: "transparent !important",
        "&:hover": {
            backgroundColor: primaryColor[0] + "!important",
            color: whiteColor,
            ...primaryBoxShadow,
            "&:after": {
                color: whiteColor
            }
        },
        "&:after": {
            top: "16px",
            right: "12px",
            width: "12px",
            height: "5px",
            borderLeft: "2px solid currentColor",
            transform: "rotate(-45deg)",
            opacity: "1",
            color: grayColor[2],
            position: "absolute",
            content: "''",
            borderBottom: "2px solid currentColor",
            transition: "opacity 90ms cubic-bezier(0,0,.2,.1)"
        }
    },
    selectPaper: {
        boxSizing: "borderBox",
        borderRadius: "4px",
        padding: "0",
        minWidth: "100%",
        display: "block",
        border: "0",
        boxShadow: "0 2px 5px 0 rgba(" + hexToRgb(blackColor) + ", 0.26)",
        backgroundClip: "padding-box",
        margin: "2px 0 0",
        fontSize: "14px",
        textAlign: "left",
        listStyle: "none",
        backgroundColor: "transparent",
        maxHeight: "266px"
    },
    titleModal: {
        textAlign: "center",
        fontSiza: "bold"
    }
})


class ModalAddBody extends BaseConsumer {
    constructor(props) {
        super(props)
        this.state = {
            age: "",
            simpleSelect: " ",
        }
    }

    _handleChange = event => {
        this.setState({ age: event.target.value });
    };

    _handleSimple = event => {
        this.setState({ simpleSelect: event.target.value });
    };

    consumerContent() {
        const { classes } = this.props;
        return (
            <React.Fragment>

                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <FormControl
                            fullWidth
                            className={classes.selectFormControl}
                        >
                            <InputLabel
                                htmlFor="simple-select"
                                className={classes.selectLabel}
                            >
                                Chọn bằng cấp
                            </InputLabel>
                            <Select
                                MenuProps={{
                                    className: classes.selectMenu
                                }}
                                classes={{
                                    select: classes.select
                                }}
                                value={this.state.simpleSelect}
                                onChange={this._handleSimple}
                                inputProps={{
                                    name: "simpleSelect",
                                    id: "simple-select"
                                }}
                            >
                                <MenuItem
                                    disabled
                                    classes={{
                                        root: classes.selectMenuItem
                                    }}
                                >
                                    Chọn bằng cấp
                                </MenuItem>
                                <MenuItem
                                    classes={{
                                        root: classes.selectMenuItem,
                                        selected: classes.selectMenuItemSelected
                                    }}
                                    value="2"
                                >
                                    Chứng chỉ A
                                </MenuItem>
                                <MenuItem
                                    classes={{
                                        root: classes.selectMenuItem,
                                        selected: classes.selectMenuItemSelected
                                    }}
                                    value="3"
                                >
                                    Chứng chỉ B
                                </MenuItem>

                            </Select>
                        </FormControl>
                    </Grid >
                    <Grid item xs={12} sm={12} md={12}>
                        <CloudUploadIcon /> Upload File
                    </Grid >
                    <Grid item xs={12} sm={12} md={12}>

                        <CustomInput
                            labelText="Vui lòng mô tả bằng cấp của bạn"
                            id="about-me"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                multiline: true,
                                rows: 5
                            }}
                        />
                    </Grid >
                </Grid>
                <Button color="github" className={classes.updateProfileButton} onClick={() => { this.closeModal(-1) }}>
                    Hủy
                </Button>
                <Button color="rose" className={classes.updateProfileButton} onClick={() => { this.closeModal(-1) }}>
                    Update Profile
                </Button>
                <Clearfix />
            </React.Fragment>
        );
    }
}

export default withStyles(style)(ModalAddBody);