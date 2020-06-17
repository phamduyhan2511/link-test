import React from 'react';
import BaseConsumer from 'BaseComponent/BaseConsumer';
import { withStyles } from '@material-ui/core';
import AnalyserItem from '../general/AnalyserItem';
import AddNew from '../general/AddNew';

class AnalyserTab extends BaseConsumer {
    constructor(props) {
        super(props);
        this.state = {}
    }

    consumerContent() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div>
                    <div className={classes.title}>
                        Not Assigned
                    </div>
                    <div className={classes.content}>
                        <AnalyserItem 
                            id={123}
                            name="ReaderNet"
                            imgUrl="/dist/Contents/img/diana.png"
                            serial={1122}
                            isActive={true}
                            onAction={() => { }}
                            actionIcon={<i style={{ color: "rgb(0, 78, 135)" }} className="fas fa-pen"></i>}
                        />
                        <AddNew text="Create new analyser" onClick={()=>{}}/>
                    </div>
                    <div className={classes.title}>
                        Assigned
                    </div>
                    <div className={classes.content}>
                        {this.props.listLab[0].listAnalyser.map(i =>{
                            return(
                                <AnalyserItem 
                                    key={i.id}
                                    id={i.id}
                                    name={i.name}
                                    imgUrl={i.image}
                                    serial={i.serial}
                                    isActive={i.isActive}
                                    onAction={()=>{}}
                                    actionIcon={<i style={{ color: "rgb(0, 78, 135)" }} className="fas fa-pen"></i>}
                                />
                            )
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const styles = {
    title: {
        fontSize: "20px",
        fontWeight: "500",
        margin: "5px 0px"
    },
    content: {
        display: "flex",
        padding: "15px 10px",
        flexWrap: "wrap",
        backgroundColor: "#eaebef",
    }
}

export default withStyles(styles)(AnalyserTab);