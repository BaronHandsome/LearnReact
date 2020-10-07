import React from 'react';
import { SongBlock } from '../SongBlock/SongBlock';
import classes from './Music.module.css'

export const Music = () => {
    return (
        <div className={classes.musicPage}>
            <SongBlock />
            <SongBlock />
            <SongBlock />
            <SongBlock />
        </div>
    )
}