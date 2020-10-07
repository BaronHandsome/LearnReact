import React from 'react';
import classes from './Friends.module.css';
import heart from './Heart.png'

export const Friends = () => {
    return (
        <div className={classes.sidebarFriends}>
            <div className={classes.friendsBlock}>
                {/* <img src={heart} alt="Heart" className={classes.photo}/> */}
                <p className={classes.name}>Kramarenko Karina</p>
            </div>
        </div>

    )
}