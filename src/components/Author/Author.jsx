import React from 'react';
import classes from './Author.module.css';
import avatar from './aasa.jpg'

const AvatarBlock = (props) => {
    return (
        <div className={classes.mainBlock}>
            <div>
                <img src={avatar} className={classes.avatarImg}></img>
            </div>
            <div>
                <h2 className={classes.username}>{props.name}</h2>
                <h3 className={classes.date}>{props.date}</h3>
            </div>
        </div>
    )
}

export default AvatarBlock;