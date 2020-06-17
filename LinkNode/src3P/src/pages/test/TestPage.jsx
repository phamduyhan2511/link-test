import React from "react";
import ReactDOM from 'react-dom';

class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <div style={{ backgroundColor: 'red' }}>kuiashdkuashdkjhaskjdhjkashdjkhasjkhd</div>
            </React.Fragment >
        );
    }
}

window.renderPage = (dom) => {
    ReactDOM.render(React.createElement(TestPage), dom);
}
