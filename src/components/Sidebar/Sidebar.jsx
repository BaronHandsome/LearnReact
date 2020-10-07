import React from 'react';
import { Friends } from '../Friends/Friends';
import classes from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <Friends />
        </div>
    )
}

export default Sidebar;