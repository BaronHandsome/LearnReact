import React from 'react';
import classes from './Artists.module.css'

export const Artists = () => {
    return (
        <div>
            <div className={classes.artistsBlock}>
                <p className={classes.name}>Artist name</p>
            </div>
            <div className={classes.artistsBlock}>
                <p className={classes.name}>Artist name</p>
            </div>
            <div className={classes.artistsBlock}>
                <p className={classes.name}>Artist name</p>
            </div>
        </div>
    )
}