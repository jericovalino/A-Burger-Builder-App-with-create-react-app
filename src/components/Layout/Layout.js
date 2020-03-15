import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState({showSideDrawer: true})
    }

    render() {
        return (
            <Auxiliary>
                <Toolbar clicked={this.sideDrawerToggleHandler} />
                <SideDrawer closed={this.closeSideDrawerHandler} open={this.state.showSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}

export default Layout;