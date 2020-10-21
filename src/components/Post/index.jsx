import React from 'react';
import { AvatarBlock } from '../index';
import classes from './Post.module.css';

export const Post = (props) => {
    return (
        <div className={classes.mainBlock}>
                <AvatarBlock name='Alexander Shebanov' date='05.10.2020' />
            <div className={classes.contentBlock}>
                <p className={classes.content}>{props.post}</p>
                <p className={classes.content}>{props.likes}</p>
            </div>
        </div>
    )
}