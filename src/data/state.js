import React from 'react'
import { Message } from '../qwerty';
import { Post } from '../components/Post'

export const data = {
    c: [
        {id: 1, message: 'Sup', likesCount:10},
        {id: 2, message: 'Second post', likesCount:80},
        {id: 3, message: 'Third post', likesCount:17},
        {id: 4, message: 'Forth post', likesCount:0}
    ],
    oldArray: [
        { mess: 'DASsssssssssdsadsfi' },
        { mess: 'DASasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddi' },
        { mess: 'sfdfs' },
        { mess: 'DASsssssssssdb c sdsadsfi' },
        { mess: 'DASsssssssssdsadgedfgfgsfi' },
    ]
}

export let newArray = data.oldArray.map(elem => <Message message={elem.mess} />);

export let posts = [
    {id: 1, message: 'Sup', likesCount:10},
    {id: 2, message: 'Second post', likesCount:80},
    {id: 3, message: 'Third post', likesCount:17},
    {id: 4, message: 'Forth post', likesCount:0}
];

// export let newPosts = data.posts.map(elem => <Post message={elem.mess} />);