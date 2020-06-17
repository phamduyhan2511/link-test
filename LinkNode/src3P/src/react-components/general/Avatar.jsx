import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
class Avatar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { width, src, classes } = this.props;
        let widthSize = width ? width : "300px";

        return (
            <React.Fragment>
                <div style={{ width: widthSize, height: widthSize, backgroundImage: `url(${src})`, position: 'relative', }} className={classes.avatar}>
                    {/* <span style={{position: 'absolute', top: '0', right: '0', cursor: 'pointer'}} onClick={this.props.onDelete}>
                        <i className="fas fa-times"></i>
                    </span> */}
                </div>
            </React.Fragment>
        )
    };


}

const styles = {
    avatar: {
        '-webkit-border-radius': '50%',
        '-webkit-background-clip': 'padding-box',
        '-moz-border-radius': '50%',
        '-moz-background-clip': 'padding',
        'border-radius': '50%',
        'background-clip': 'padding-box',
        'background-size': 'cover',
        'background-position': 'center center',
    }
}

export default withStyles(styles)(Avatar)