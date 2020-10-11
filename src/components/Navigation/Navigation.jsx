import React from 'react';
import classes from './Navigation.module.css';
import userImg from './img/user.jfif'
import messageImg from './img/message.jfif'
import infoImg from './img/info.jfif'
import musicImg from './img/music.jfif'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><NavLink to='/MyPage' activeClassName={classes.active}><div className={classes.liBlock}><img src={userImg} className={classes.img}></img>Profile</div></NavLink></li>
                <li><NavLink to='/Dialogs'><div className={classes.liBlock}><img src={messageImg} className={classes.img}></img>Messages</div></NavLink></li>
                <li><NavLink to='/News'><div className={classes.liBlock}><img src={infoImg} className={classes.img}></img>News</div></NavLink></li>
                <li><NavLink to='/Music'><div className={classes.liBlock}><img src={musicImg} className={classes.img}></img>Music</div></NavLink></li>
                <li><div className={classes.liBlock}><a>Settings</a></div></li>
            </ul>
        </nav>
    )
}

export default Nav;