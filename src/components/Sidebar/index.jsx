import React from 'react';
import classes from './Sidebar.module.css';

export const Sidebar = (props) => {
    return (
    <div className={classes.sidebar}>{props.children}</div>
    )
}