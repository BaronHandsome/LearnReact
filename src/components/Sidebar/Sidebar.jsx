import React from 'react';
import { Artists } from '../Artists/Artists';
import { Friends } from '../Friends/Friends';
import classes from './Sidebar.module.css';

const Sidebar = (props) => {
    return (
    <div className={classes.sidebar}>{props.children}</div>
    )
}

export default Sidebar;