import React from 'react';
import BaseConsumer from 'BaseComponent/BaseConsumer';
import { withStyles } from '@material-ui/core';
import AnalyserItem from '../general/AnalyserItem';
import LisItem from '../general/LisItem';
import AddNew from '../general/AddNew';

class LabInfo extends BaseConsumer {
    constructor(props) {
        super(props);
        // this.state = {}
    }

    _onClickEdit = () => {
        this.props.onClickEdit(this.props.id)
    }

    _onDelete = (id, list) => {
        this.confirm("Are you sure to detele?", {
            okay: {
                title: "Delete",
                handle: () => {
                    this.removeElement(list, list.find(i => i.id == id), () => {
                        this.success("Delete success")
                    })
                }
            },
            cancel:{
                title: "Cancel",
            }
        })

    }

    _onClickMirror = (id, value)=>{
        this.updateObject(this.props.listLis.find(i=>i.id == id), {isMirror: value})
    }

    consumerContent() {
        const { classes } = this.props;
        const analyserNumber = this.props.listAnalyser.length;
        const lisNumber = this.props.listLis.length;
        const mirrorNumber = this.props.listLis.filter(i => i.isMirror == true).length;
        return (
            <div>
                <div className={classes.labInfo}>
                    <span className={classes.labName}>{this.props.name}</span>
                    <span className={classes.divider}></span>
                    <span className={classes.labPriority}>Priority: {this.props.priority}</span>
                    <span className={classes.divider}></span>
                    <span className={classes.labDetailInfo}>{analyserNumber} analyser, {lisNumber} LIS, + {mirrorNumber} mirror</span>
                    <span className={classes.divider}></span>
                    <span className={classes.labEditButton} onClick={this._onClickEdit}><span><i className="fas fa-pen"></i></span> Edit Lab</span>
                </div>
                <div className={classes.backgroundItem}>
                    <div className={classes.dash}><p className={classes.itemName}>Analyser</p></div>
                </div>
                <div className={classes.backgroundItem}>
                    {this.props.listAnalyser.map(i => {
                        return (
                            <AnalyserItem
                                key={i.id}
                                id={i.id}
                                name={i.name}
                                imgUrl={i.image}
                                serial={i.serial}
                                isActive={i.isActive}
                                onAction={() => { this._onDelete(i.id, this.props.listAnalyser) }}
                                actionIcon={<i style={{ color: "rgb(0, 78, 135)" }} className="fas fa-trash-alt"></i>}
                            />
                        )
                    })}
                    <AddNew text="Add machine" />
                </div>
                <div className={classes.backgroundItem}>
                    <div className={classes.dash}><p className={classes.itemName}>Lis</p></div>
                </div>
                <div className={classes.backgroundItem}>
                    {this.props.listLis.map(i => {
                        return (
                            <LisItem
                                key={i.id}
                                id={i.id}
                                name={i.name}
                                imgUrl={i.image}
                                serial={i.serial}
                                isActive={i.isActive}
                                isMirror={i.isMirror}
                                onClickMirror={this._onClickMirror}
                                onAction={() => { this._onDelete(i.id, this.props.listLis) }}
                                actionIcon={<i style={{ color: "rgb(0, 78, 135)" }} className="fas fa-trash-alt"></i>}
                            />
                        )
                    })}
                    <AddNew text="Add new lis" />
                </div>
            </div>
        );
    }
}

const styles = {
    labInfo: {
        margin: "20px 0px 10px 0px",
    },
    labName: {
        fontSize: "20px",
        fontWeight: 500,
        fontFamily: "'Open Sans', sans-serif",
    },
    divider: {
        width: "2px",
        border: "solid 1px #bfcad3",
        height: "28px",
        margin: "0px 15px",
        backgroundColor: "#bfcad3",
    },
    labPriority: {
        color: "#000000",
        fontSize: "14px",
        fontWeight: "600",
    },
    labDetailInfo: {
        color: "#333333",
        fontSize: "14px",
    },
    labEditButton: {
        color: "rgb(0, 78, 135)",
        cursor: "pointer",
    },
    backgroundItem: {
        display: "flex",
        padding: "20px 10px 10px 10px",
        flexWrap: "wrap",
        backgroundColor: "#eaebef",
    },
    dash: {
        width: "100%",
        height: "1px",
        margin: "0px 15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#bfcad3",
    },
    itemName: {
        margin: " 0px 10px",
        fontSize: "14px",
        minWidth: "66px",
        textAlign: "center",
        fontWeight: "600",
        backgroundColor: "#eaebef",
    }
}

export default withStyles(styles)(LabInfo);