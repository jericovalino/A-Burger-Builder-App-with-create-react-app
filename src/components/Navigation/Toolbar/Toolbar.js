import React from 'react';

import classes from './Toolbar.css';
// import Logo from '../../Logo/Logo';
import YakadLogo from '../../YakadLogo/YakadLogo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleDrawer from '../SideDrawer/ToggleDrawer/ToggleDrawer'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <ToggleDrawer clicked={props.clicked}/>
        <YakadLogo size="60px" />
        {/* <Logo height="80%"></Logo> */}
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;