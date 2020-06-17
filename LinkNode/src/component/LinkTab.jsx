import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';

const AntTabs = withStyles({
    root: {
        // borderBottom: "1px solid #e8e8e8",
        background: "linear-gradient(to bottom,#fff 50%,rgba(224,224,224,.639216) 95%);"
    },
    indicator: {
        backgroundColor: "white" // "#1890ff"
    }
})(Tabs);

const AntTab = withStyles(theme => ({
    root: {
        textTransform: "none",
        fontWeight: "bold",
        fontSize: "13px",
        minWidth: 72,
        // fontWeight: theme.typography.fontWeightRegular,
        // marginRight: theme.spacing(4),
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(","),
        "&:hover": {
            color: "#004e87",
            opacity: 1
        },
        "&$selected": {
            color: "#004e87",
            fontWeight: "bold",
            fontSize: "13px",
            borderRadius: "6px 6px 0 0",
            borderTop: "3px solid #004e87",
            borderRight: "1px solid #eaebef",
            borderBottom: "none",
            borderLeft: "1px solid #eaebef",
            backgroundColor: "white"
            // color: import PropTypes from 'prop-types';,
        },
        "&:focus": {
            // color: '#40a9ff',
            borderRadius: "6px 6px 0 0",
            borderTop: "3px solid #004e87",
            borderRight: "1px solid #eaebef",
            borderBottom: "none",
            borderLeft: "1px solid #eaebef",
            color: "#004e87",
        }
    },
    selected: {}
}))(props => <Tab disableRipple {...props} />);

class LinkTab extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     // value: 0,
        // }
    }

    _handleChange = (event, newValue) => {
        // this.setState({ value: newValue })
        // console.log(newValue)
        this.props.onClickTab(newValue)
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <div className={classes.demo1}>
                    <AntTabs
                        value={this.props.value}
                        classes={{ indicator: classes.Indicator }}
                        onChange={this._handleChange}
                    >
                        {this.props.listTab.map(i => {
                            return (
                                <AntTab key={i.id} label={i.name} value={i.id}/>
                            )
                        })}
                        {/* <AntTab label="Tab 2" />
                    <AntTab label="Tab 3" /> */}
                    </AntTabs>
                    {/* <Typography className={classes.padding} /> */}
                </div>
            </div>
        )
    }
}

LinkTab.propTypes = {
    listTab: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.number
        })
    ).isRequired,
}

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    padding: {
        padding: theme.spacing(3)
    },
    demo1: {
        backgroundColor: theme.palette.background.paper
    },
    demo2: {
        backgroundColor: "#2e1534"
    },
    Indicator: {
        ripple: {
            color: "inherit"
        },
    }
})

export default withStyles(styles)(LinkTab)


// export default function CustomizedTabs() {
//     const classes = useStyles();
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <div className={classes.root}>
//             <div className={classes.demo1}>
//                 <AntTabs value={value} onChange={handleChange} aria-label="ant example">
//                     <AntTab label="Tab 1" />
//                     <AntTab label="Tab 2" />
//                     <AntTab label="Tab 3" />
//                 </AntTabs>
//                 <Typography className={classes.padding} />
//             </div>
//         </div>
//     );
// }
