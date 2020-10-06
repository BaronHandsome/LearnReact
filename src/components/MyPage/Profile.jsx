import React from 'react';
import { Post } from '.././Post/Post';
import classes from './Profile.module.css';

const MainPage = () => {
    return (
        <article className={classes.content}>
            <Post />
        </article>
    )
}

export default MainPage;