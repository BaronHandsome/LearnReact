import React from 'react';
import { MainPost } from '../index';
import classes from './News.module.css';

export const News = (props) => {
    return (
        <div className={classes.mainBlock}>
            <div className={classes.content}>
                <MainPost />
            </div>
        </div>
    )
}