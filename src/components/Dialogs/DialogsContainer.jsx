import React from 'react';
import Message from '../Message/Message';
import classes from './DialogsContainer.module.css';

export const Dialogs = () => {
    return (
        <div className={classes.dialogsContainer}>
            <Message />
            <Message />
        </div>

    )
}