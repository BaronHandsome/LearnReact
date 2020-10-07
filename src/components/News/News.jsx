import React from 'react';
import AvatarBlock from '../Author/Author';
import { Post } from '../Post/Post';
import classes from './News.module.css';

export const News = (props) => {
    return(
        <div className={classes.content}>
            <Post  name='asdasd' date='asdfgg' />
        </div>
    )
}