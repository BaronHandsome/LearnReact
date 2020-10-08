import React from 'react';
import { Friends } from '../Friends/Friends';
import { Post } from '../Post/Post';
import Sidebar from '../Sidebar/Sidebar';
import classes from './MainPage.module.css';

const MainPage = () => {
    return (
        <div className={classes.mainBlock}>
            <article className={classes.content}>
                <Post />
            </article>
            <div className={classes.sidebarBlock}>
                <Sidebar>
                    
                </Sidebar>
            </div>
        </div>
    )
}

export default MainPage;