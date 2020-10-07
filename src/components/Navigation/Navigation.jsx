import React from 'react';
import classes from './Navigation.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
        <ul>
            <li><a href='/MyPage'>Profile</a></li>
            <li><a href='/Dialogs'>Messages</a></li>
            <li><a href='/News'>News</a></li>
            <li><a href='/Music'>Music</a></li>
            <li><a>Settings</a></li>
        </ul>
    </nav>
    )
}

export default Nav;