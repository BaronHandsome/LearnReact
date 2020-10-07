import React from 'react';
import { Post } from '../Post/Post';
import Sidebar from '../Sidebar/Sidebar';
import classes from './MainPage.module.css';

const MainPage = () => {
    return (
        <article className={classes.content}>
            <Post />
            {/* <Sidebar /> */}
        </article>
    )
}

export default MainPage;