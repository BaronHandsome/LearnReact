import React from 'react';
import classes from './Friends.module.css';
import userImg from './user.jfif'

export const Friends = () => {
    return (
        <div className={classes.sidebarFriends}>
            <div className={classes.friendsBlock}>
                <img src={userImg} alt="User photo" className={classes.photo}/>
                <p className={classes.name}>User name</p>
            </div>
            <div className={classes.friendsBlock}>
                <img src={userImg} alt="User photo" className={classes.photo}/>
                <p className={classes.name}>User name</p>
            </div>
            <div className={classes.friendsBlock}>
                <img src={userImg} alt="User photo" className={classes.photo}/>
                <p className={classes.name}>User name</p>
            </div>
        </div>

    )
}