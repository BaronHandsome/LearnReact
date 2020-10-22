import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { newArray, posts } from './data/state';


// let oldArray = [
//   {mess: 'DASsssssssssdsadsfi'},
//   {mess: 'DASasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddi'},
//   {mess: 'sfdfs'},
//   {mess: 'DASsssssssssdb c sdsadsfi'},
//   {mess: 'DASsssssssssdsadgedfgfgsfi'},
// ];

// let newArray = oldArray.map(elem => <Message message={elem.mess} />);

ReactDOM.render(
  <React.StrictMode>
    <App messages={newArray} posts={posts.message} likesCount={posts.likesCount} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
