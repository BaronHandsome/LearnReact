import React from 'react';
import { Friends, Sidebar } from '../index';
import classes from './Dialogs.module.css';

export const Dialogs = (props) => {
    return (
        <div className={classes.mainBlock}>
            <div className={classes.sidebarBlock}>
                <Sidebar>
                    <Friends />
                </Sidebar>
            </div>
            <div className={classes.dialogsContainer}>
                {props.messages}
            </div>
        </div>

    )
}