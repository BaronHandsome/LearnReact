import React from 'react';
import { Artists } from '../Artists/Artists';
import { Friends } from '../Friends/Friends';
import classes from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <Friends />
            {/* <Artists /> */}
        </div>
    )
}

export default Sidebar;