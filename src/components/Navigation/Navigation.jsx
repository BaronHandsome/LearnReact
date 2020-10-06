import React from 'react';
import classes from './Navigation.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
        <ul>
            <li><a className=''>Profile</a></li>
            <li><a className=''>Messages</a></li>
            <li><a className=''>News</a></li>
            <li><a className=''>Music</a></li>
            <li><a className=''>Settings</a></li>
        </ul>
    </nav>
    )
}

export default Nav;