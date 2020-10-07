import React from 'react';
import classes from './Navigation.module.css';
import userImg from './img/user.jfif'
import messageImg from './img/message.jfif'
import infoImg from './img/info.jfif'
import musicImg from './img/music.jfif'

const Nav = () => {
    return (
        <nav className={classes.nav}>
        <ul>
            <li><a href='/MyPage'><img src={userImg} className={classes.img}></img>Profile</a></li>
            <li><a href='/Dialogs'><img src={messageImg} className={classes.img}></img>Messages</a></li>
            <li><a href='/News'><img src={infoImg} className={classes.img}></img>News</a></li>
            <li><a href='/Music'><img src={musicImg} className={classes.img}></img>Music</a></li>
            <li><a>Settings</a></li>
        </ul>
    </nav>
    )
}

export default Nav;