import React from 'react';
import Message from '../Message/Message';
import classes from './DialogsContainer.module.css';

export const DialogsContainer = () => {
    return (
        <div className={classes.dialogsContainer}>
            <Message />
            <Message />
        </div>

    )
}