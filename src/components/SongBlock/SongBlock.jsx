import React from 'react';
import classes from './SongBlock.module.css'
import play from './Play.png'

export const SongBlock = () => {
    return (
        <div>
            <div className={classes.SongBlockContainer}>
            <img src={play} alt="Play Icon" className={classes.iconBlock}/>
            <h3>Song Author</h3>
            <h3>Song Name</h3>
            </div>
            <hr/>
        </div>

    )
}