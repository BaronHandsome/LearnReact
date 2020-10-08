import React from 'react';
import { Friends } from '../Friends/Friends';
import Message from '../Message/Message';
import Sidebar from '../Sidebar/Sidebar';
import classes from './DialogsContainer.module.css';

export const DialogsContainer = () => {
    return (
        <div className={classes.mainBlock}>
            <div className={classes.dialogsContainer}>
                <Message />
                <Message />
            </div>
            <div className={classes.sidebarBlock}>
                <Sidebar>
                    <Friends />
                </Sidebar>
            </div>
        </div>

    )
}