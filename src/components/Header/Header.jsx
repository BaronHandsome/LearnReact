import React from 'react';
import logo from './img/logo.png';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={logo} className={classes.header__logo} />
        </header>
    )
}

console.log(classes);

export default Header;