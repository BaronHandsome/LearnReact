import React from 'react';
import AvatarBlock from '.././Author/Author';
import { Friends } from '../Friends/Friends';
import Sidebar from '../Sidebar/Sidebar';
import avatar from './aasa.jpg';
import classes from './Message.module.css';



export const Message = () => {
    return (
        <div className={classes.mainBlock}>
            <div className={classes.contentBlock}>
                <AvatarBlock name='Sasha' date='06.10.2020' />
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt nulla quam saepe? Nihil dolor dolore temporibus voluptates sit, voluptatum perspiciatis ut distinctio recusandae debitis animi nulla error, explicabo enim!</p>
                </div>
            </div>
        </div>

    )
}
export default Message;