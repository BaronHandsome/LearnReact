import React from 'react';
import { Artists } from '../Artists/Artists';
import Sidebar from '../Sidebar/Sidebar';
import { SongBlock } from '../SongBlock/SongBlock';
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
            <div className={classes.sidebarBLock}>
                <Sidebar>
                    <Artists />
                </Sidebar>
            </div>
        </div>
    )
}