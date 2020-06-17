import React from 'react';
import BaseConsumer from 'BaseComponent/BaseConsumer';
import { withStyles } from '@material-ui/core';
import AnalyserItem from '../general/AnalyserItem';
import AddNew from '../general/AddNew';
import Item from '../general/Item';

class LisTab extends BaseConsumer {
    constructor(props) {
        super(props);
        this.state = {}
    }

    consumerContent() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div>
                    <div className={classes.content}>
                        {this.props.listLab[0].listLis.map(i => {
                            return (
                                <Item
                                    key={i.id}
                                    id={i.id}
                                    name={i.name}
                                    imgUrl={i.image}
                                    isActive={i.isActive}
                                    onAction={() => { }}
                                    actionIcon={<i style={{ color: "rgb(0, 78, 135)" }} className="fas fa-pen"></i>}
                                />
                            )
                        })}
                        <AddNew 
                            text="Create new lis"
                            onClick={()=>{}}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const styles = {
    content: {
        display: "flex",
        padding: "15px 10px",
        flexWrap: "wrap",
        backgroundColor: "#eaebef",
    }
}

export default withStyles(styles)(LisTab);