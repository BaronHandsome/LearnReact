import React from 'react';
import { AvatarBlock } from '../index';
import classes from './MainPost.module.css';

export const MainPost = () => {
    return (
        <div>
            <AvatarBlock name='Alexander Shebanov' date='05.10.2020' />
            <div>
                <img src='https://www.appstorrent.ru/uploads/posts/2020-03/1585510613_hollow-knight.jpg' alt='Hollow Knight' className={classes.contentImg}></img>
            </div>
        </div>
    )
}