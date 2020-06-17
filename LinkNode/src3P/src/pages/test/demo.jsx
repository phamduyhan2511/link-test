import { BasePage } from 'BaseComponent/BasePage'
import ReactDOM from 'react-dom';
import React from 'react';
import { withStyles } from '@material-ui/core'
import { Card, CardHeader, CardContent, Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import GradeIcon from '@material-ui/icons/Grade';
import Button from 'components/CustomButtons/Button'
import CardAvatar from 'components/Card/CardAvatar'

class DetailPage extends BasePage {
    constructor(props) {
        super(props);
        this.state = {
            avatar: "/dist/Contents/images/avatar.jpg",
            title: "Lương theo vị trí",
            detail: [
                { name: "Vị trí", value: "Bác sĩ" },
                { name: "Khoa", value: "Răng Hàm Mặt" },
                { name: "Hệ số Vị trí", value: 0.9 },
                { name: "Hiệu quả chuyên môn", value: 8 },
                { name: "Trọng số chuyên môn", value: 0.7 },
                { name: "Hiệu quả vận hành", value: 5 },
                { name: "Trọng số vận hành", value: 0.9 },
                { name: "Rủi ro pháp lý", value: 10 },
                { name: "Trọng số pháp lý", value: 1 },
                { name: "Phát triển hệ thống", value: 6 },
                { name: "Trọng số phát triển", value: 0.5 },
            ]
        }
    }

    childrenRender() {
        const { classes } = this.props;
        const percent = 25 * 100 / 30
        const date = new Date().getDate(); const month = new Date().getMonth(); const year = new Date().getFullYear();
        const cardHeaderTitle = () => {
            return (
                <React.Fragment>
                    <Grid container>
                        <Grid className={classes.leftHeader} item xs={2} sm={2} md={2}>
                            P1
                        </Grid>
                        <Grid item xs={10} sm={10} md={10}>
                            <Grid>{this.state.title}</Grid>
                            <Grid className={classes.fontSize10px}>{date + '/' + month + '/' + year}</Grid>
                        </Grid>
                    </Grid>
                </React.Fragment>
            )
        }

        return (
            <React.Fragment>

                <Card className={classes.card}>
                    
                    <CardHeader className={classes.cardHeader} title={cardHeaderTitle()}>

                    </CardHeader>
                    <CardContent className={classes.cardContent}>

                        <Grid container>
                            {this.state.detail.map((detail, index) => {
                                return (
                                    <React.Fragment key={"detail" + index}>
                                        <Grid item xs={2} sm={2} md={2}>
                                            <GradeIcon className={classes.redIcon} />
                                        </Grid>
                                        <Grid container item xs={10} sm={10} md={10} >
                                            <Grid className={classes.textName} item xs={7} sm={7} md={7} >{detail.name + ":"}</Grid>
                                            <Grid className={classes.textAlignRight} item xs={5} sm={5} md={5} >{detail.value}</Grid>
                                        </Grid>
                                    </React.Fragment>
                                )
                            })}
                            <Grid item xs={2} sm={2} md={2}>
                                <GradeIcon className={classes.redIcon} />
                            </Grid>
                            <Grid container item xs={10} sm={10} md={10} >
                                <Grid className={classes.textName} item xs={7} sm={7} md={7} >Lương tại vị trí:</Grid>
                                <Grid className={classes.textAlignRight} item xs={5} sm={5} md={5} >5.000.000 đ</Grid>
                            </Grid>
                        </Grid>


                    </CardContent>
                </Card>
                <Grid className={classes.pinkColor} container>
                    <Grid item className={classes.footerInfo} xs={12} sm={12} md={12}>
                        Số ngày làm: 12
                    </Grid>
                    <Grid item className={classes.footerInfo} xs={12} sm={12} md={12}>
                        Số ngày nghỉ: 5
                    </Grid>


                    <Grid item className={classes.footerInfo} xs={12} sm={12} md={12}>
                        Lương dự kiến: 2.300.000 đ
                        <div className={classes.grayBackground} style={{ width: '100%', marginTop: '10px' }}>
                            <div className={classes.greenBackground} style={{ width: `${percent}%` }}></div>
                        </div>
                    </Grid>
                    <Grid container item className={classes.footerInfo} xs={12} sm={12} md={12}>
                        <Grid item xs={3} sm={3} md={3}>
                            <div className={classes.greenBackground} style={{ width: '80%', marginTop: '10px' }}></div>
                        </Grid>
                        <Grid item xs={9} sm={9} md={9}>
                            <div>Lương dự kiến</div>
                        </Grid>
                        <Grid item container xs={3} sm={3} md={3}>
                            <div className={classes.grayBackground} style={{ width: '80%', marginTop: '10px' }}></div>
                        </Grid>
                        <Grid item container xs={9} sm={9} md={9}>
                            <div>Lương tại vị trí</div>
                        </Grid>
                    </Grid>
                    <Button color="red">ok</Button>
                </Grid>

            </React.Fragment>



        );
    }
}

const styles = {
    card: {
        marginBottom: "5px"
    },

    fontSize10px: {
        fontSize: "10px",
        color: "#cccccc"
    },

    cardHeader: {
        background: "#0e89d0",
        color: "white",
        textAlign: "center",
        fontFamily: "Impact"
    },

    cardContent: {
        background: "#FFFFFF",
    },

    textName: {
        fontWeight: "bold",
        color: "black"
    },
    textAlignRight: {
        color: "#black",
        textAlign: "right",
        fontWeight: "bold",
    },
    redIcon: {
        color: "#0e89d0"
    },
    pinkColor: {
        color: "#D77699",
        fontWeight: "bold",
    },
    footerInfo: {
        paddingLeft: "20px",
        paddingRight: "20px"
    },
    grayBackground: {
        background: "#cccccc",
        height: "5px",

    },
    greenBackground: {
        height: '5px',
        background: "green"
    },
    leftHeader: {
        borderRight: '1px solid #cccccc ',
        fontSize: '20px',
        lineHeight: '2.5'
    }
}

window.renderPage = (dom) => {
    ReactDOM.render(React.createElement(withStyles(styles)(DetailPage)), dom);
}
