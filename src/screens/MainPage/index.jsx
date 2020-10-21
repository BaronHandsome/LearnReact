import React from 'react';
import { MainPost, Post } from '../index';
import classes from './MainPage.module.css';

export const MainPage = (props) => {
    return (
        <div className={classes.mainBlock}>
            <article className={classes.content}>
                <MainPost />
                <Post post={props.post} likesCount={props.likesCount}/>
            </article>
        </div>
    )
}