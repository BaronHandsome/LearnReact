import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Friends.module.css';
import userImg from './user.jfif'

export const Friends = () => {
    return (
        <div className={classes.sidebarFriends}>
            <div className={classes.friendsBlock}>
                <NavLink to='./userFriends/1'>
                    <p className={classes.name}><img src={userImg} alt="User photo" className={classes.photo} />User name 1</p>
                </NavLink>
            </div>
            <div className={classes.friendsBlock}>
                <NavLink to='./userFriends/2'>
                    <p className={classes.name}><img src={userImg} alt="User photo" className={classes.photo} />User name 2</p>
                </NavLink>
            </div>
            <div className={classes.friendsBlock}>
                <NavLink to='./userFriends/3'>
                    <p className={classes.name}><img src={userImg} alt="User photo" className={classes.photo} />User name 3</p>
                </NavLink>
            </div>
            <div className={classes.friendsBlock}>
                <NavLink to='./userFriends/4'>
                    <p className={classes.name}><img src={userImg} alt="User photo" className={classes.photo} />User name 4</p>
                </NavLink>
            </div>
        </div>
    )
}