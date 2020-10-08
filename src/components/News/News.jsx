import React from 'react';
import AvatarBlock from '../Author/Author';
import { Post } from '../Post/Post';
import Sidebar from '../Sidebar/Sidebar';
import classes from './News.module.css';

export const News = (props) => {
    return (
        <div className={classes.mainBlock}>
            <div className={classes.content}>
                <Post />
            </div>
            <div className={classes.sidebarBlock}>
                <Sidebar></Sidebar>
            </div>
        </div>
    )
}