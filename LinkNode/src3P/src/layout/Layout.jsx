import React, { Fragment } from 'react';
import BaseConsumer from 'BaseComponent/BaseConsumer';
import Header from './layout-components/Header';
import { SwipeableDrawer } from "@material-ui/core"
import MenuItemLayout from './layout-components/MenuItemLayout'


export default class Layout extends BaseConsumer {
    constructor(props) {
        super(props);
        this.pageTitle = "3P";
        this.state = {
            isOpen: false,
            isOpenMenu: false,
        };
    }
    componentDidMount() {
        document.title = "3P - " + this.pageTitle;
    }
    renderBody() {
        throw new Error("chua ghi de renderBody");
    }
    _onClickNoti = () => {

    }

    _handleCloseMenu = () => {
        this.setState({ isOpenMenu: false })
    }

    _handleOpenMenu = () => {
        this.setState({ isOpenMenu: true })
        console.log(1)
    }
    consumerContent() {
        return (
            <Fragment>
                <div className="layout-3p">
                    {this.isNotHeader == true
                        ? null
                        : <Header
                            title={this.pageTitle}
                            onClickNoti={this._onClickNoti}
                            isOpenMenu={this.state.isOpenMenu}
                            handleOpenMenu={this._handleOpenMenu}
                        />}
                    <SwipeableDrawer
                        open={this.state.isOpenMenu}
                        onClose={this._handleCloseMenu}
                        onOpen={this._handleOpenMenu}
                    >
                        <MenuItemLayout
                            handleCloseMenu={this._handleCloseMenu}
                        />

                    </SwipeableDrawer>
                    <div className="body-3p">
                        {this.renderBody()}
                    </div>
                </div>
            </Fragment>
        )
    }
}



