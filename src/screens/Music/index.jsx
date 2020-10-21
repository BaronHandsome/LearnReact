import React from 'react';
import { SongBlock } from '../index';
import classes from './Music.module.css'

export const Music = () => {
    return (
        <div className={classes.mainBlock}>
                <div className={classes.musicPage}>
                    <SongBlock />
                    <SongBlock />
                    <SongBlock />
                    <SongBlock />
                </div>
        </div>
    )
}