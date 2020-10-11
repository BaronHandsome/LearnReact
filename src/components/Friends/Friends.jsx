import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Friends.module.css';
import userImg from './user.jfif'


export const DialogItem = (props) => {
    let path = './userFriends' + props.id;

    return (
        <div className={classes.friendsBlock}>
            <NavLink to={path}>
                <p className={classes.name}><img src={props.photo} alt="User photo" className={classes.photo} />{props.name}</p>
            </NavLink>
        </div>
    )
}

export const Friends = () => {
    return (
        <div className={classes.sidebarFriends}>
            <DialogItem id='1' photo={userImg} name='User name 1' />
            <DialogItem id='2' photo={userImg} name='User name 2' />
            <DialogItem id='3' photo={userImg} name='User name 3' />
            <DialogItem id='4' photo={userImg} name='User name 4' />
        </div>
    )
}