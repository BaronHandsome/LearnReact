import React from 'react';
import AvatarBlock from '.././Author/Author';
import { Friends } from '../Friends/Friends';
import Sidebar from '../Sidebar/Sidebar';
import avatar from './aasa.jpg';
import classes from './Message.module.css';



export const Message = (props) => {
    return (
        <div className={classes.mainBlock}>
            <div className={classes.contentBlock}>
                <AvatarBlock name='Sasha' date='06.10.2020' />
                <div>
                    <p>{props.message}</p>
                </div>
            </div>
        </div>

    )
}
export default Message;