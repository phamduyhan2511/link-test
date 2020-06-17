import React, { Fragment } from 'react';
import BaseConsumer from 'BaseComponent/BaseConsumer';
import { withStyles, ButtonBase } from '@material-ui/core';
import classnames from 'classnames';
import Colors from '../../general/color';
import { guid, getDates, equalDate, getDateOfWeekTitle } from '../../general/helper';
import $ from 'jquery';
import size from '../../general/size-config';
import moment from 'moment';


const itemWidth = size.dateItemWidth;
class DateBar extends BaseConsumer {
    constructor(props) {
        super(props);
        this._scrollId = guid.get();
    }
    componentDidMount() {
        const scroller = document.getElementById(this._scrollId);
        let activeItem = document.getElementById(`${this._scrollId}active`);
        this._scrollDateBarTo(activeItem.scrollLeft);
        this._bar = $(`#${this._scrollId}`);
        this._addDetector();
        window.scroller = scroller;
        window.bar = this._bar;
    }
    _scrollDateBarTo = offset => {
        const scroller = document.getElementById(this._scrollId);
        scroller.scrollLeft = offset;
    }
    _addDetector = () => {
        this._bar.on('scroll', this._scrollToFirstDetector);
        this._bar.on('scroll', this._scrollToLastDetector);
    }
    _removeDetector = () => {
        this._bar.off('scroll', this._scrollToFirstDetector);
        this._bar.off('scroll', this._scrollToLastDetector);
    }
    _scrollToFirstDetector = e => {
        if (this._bar.scrollLeft() == 0) {
            this._removeDetector();
            this.props.onLoadMoreLeft(() => {
                this._scrollDateBarTo(innerWidth);
                // const { fromDate, dateChosen} = this.props;
                // const dates = getDates(fromDate, dateChosen);
                // if (dates.length > 0){
                //     this._scrollDateBarTo(dates.length * itemWidth);
                // }
                //setTimeout(this._addDetector, 400);
            });
        }
    }
    _scrollToLastDetector = e => {
        const left = this._bar.scrollLeft();
        const offset = (this._bar[0].scrollWidth - this._bar.outerWidth());
        if (left == offset) {
            this._removeDetector();
            this.props.onLoadMoreRight(() => {
                // const { fromDate, dateChosen} = this.props;
                // const dates = getDates(fromDate, dateChosen);
                // if (dates.length > 0){
                //     this._scrollDateBarTo(dates.length * itemWidth);
                // }
                //setTimeout(this._addDetector, 400);
            });
        }
    }
    consumerContent() {
        const { classes, fromDate, toDate, dateChosen, onClickDate, dateHasTask } = this.props;
        const dates = getDates(fromDate, toDate);
        return (
            <Fragment>
                <div className={classes.container}>
                    <div className={classes.innerContainer + " flex-box"} id={this._scrollId}>
                        {dates.map(i => {
                            const day = i.getDay();
                            const month = i.getMonth();
                            const date = i.getDate();
                            const year = i.getYear();
                            let isChosen = equalDate(dateChosen, i);
                            return (
                                <ButtonBase key={`date${date}-day${day}-month${month}-year${year}`} className={classes.dateItem} onClick={() => { onClickDate(i); }}>
                                    <div className={classnames({
                                        [classes.dateItemInner]: true,
                                        [classes.active]: isChosen,
                                    })}>
                                        <div style={{ fontSize: '1rem' }} id={isChosen ? `${this._scrollId}active` : ""}>
                                            {dateHasTask.find(j => equalDate(i, j))
                                                ? <div><i style={{ color: 'grey', fontSize: '0.5rem' }} className="fas fa-circle"></i></div>
                                                : <div>&nbsp;</div>}
                                            {`T${month + 1}`}
                                        </div>
                                        <div>{date}</div>
                                    </div>
                                </ButtonBase>
                            )
                        })}

                    </div>
                </div>
            </Fragment>
        )
    }
}
export default withStyles({
    container: {
        borderBottom: '1px solid #aeaeae50',
        background: Colors.lightBlue,
    },
    innerContainer: {
        overflowX: 'auto',
    },
    dateItem: {
        padding: '4px',
        flex: `0 0 ${itemWidth}px`,
        fontFamily: 'inherit',
    },
    dateItemInner: {
        fontWeight: '400',
        fontSize: '1.2rem',
        textAlign: 'center',
    },
    active: {
        color: Colors.blue,
        fontWeight: '500',
        width: '90%',
        borderRadius: '5px',
        border: '1px solid ' + Colors.blue
    }
})(DateBar);