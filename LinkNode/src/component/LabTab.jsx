import React from 'react';
import BaseConsumer from 'BaseComponent/BaseConsumer';
import { withStyles } from '@material-ui/core';
import LabInfo from "./LabInfo"

class LabTab extends BaseConsumer {
    constructor(props) {
        super(props);
        this.state = {}
    }

    consumerContent() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className={classes.createNewLabDiv} >
                    <div className={classes.createNewLabButton}>
                        Create new lab
                    </div>
                </div>
                {this.props.listLab.map(i => {
                    return (
                        <LabInfo
                            key={i.id}
                            name={i.name}
                            id={i.id}
                            priority={i.priority}
                            listAnalyser={i.listAnalyser}
                            listLis={i.listLis}
                        />
                    )
                })}
            </React.Fragment>
        )
    }
}

const styles = {
    createNewLabDiv: {
        display: "flex",
        padding: "15px 10px",
        flexWrap: "wrap",
        backgroundColor: "#eaebef"
    },
    createNewLabButton: {
        color: "white",
        width: "158px",
        cursor: "pointer",
        height: "40px",
        display: "flex",
        boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.3)",
        alignItems: "center",
        marginLeft: "15px",
        borderRadius: "4px",
        justifyContent: "center",
        backgroundColor: "#004e87",
    },
}
export default withStyles(styles)(LabTab);