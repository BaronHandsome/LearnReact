import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.siteNameBlock}>
                <p className ={classes.siteLogo}>U</p>
            </div>
            <h1 className={classes.siteName}>User name</h1>
        </header>
    )
}

console.log(classes);

export default Header;