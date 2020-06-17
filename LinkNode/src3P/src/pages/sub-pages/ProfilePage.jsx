import Colors from "../../general/Color";
import BaseConsumer from 'BaseComponent/BaseConsumer';
import React from 'react'
import Layout from "../../layout/Layout";
import { withStyles } from "@material-ui/core";
import ProfileInfo from "../../react-components/profile/ProfileInfo";


export default class ProfilePage extends Layout {
    constructor(props){
        super(props);
        this.pageTitle = "Trang cá nhân";
    }
    renderBody() {
        return (
            <div>
                <ProfileInfo  data={this.props.data} />
            </div>
        )
    }
}