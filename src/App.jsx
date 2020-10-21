import React from 'react';
import './App.css';
import { MainPage, Music, News, Dialogs } from './screens/index'; 
import {  Footer, Header, Nav } from './components/index'; 
import { BrowserRouter, Route } from 'react-router-dom';
import { post, newArray } from './data/state';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='content'>
          <Route path='/MyPage' render={() => <MainPage post={props.post} likesCount={props.likesCount}/>}/>
          <Route path='/Dialogs' render={() => <Dialogs messages={newArray} />}/>
          <Route path='/News' component={News} />
          <Route path='/Music' component={Music} />
          <Route />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

{/* <Route path='/Dialogs' render={() => <DialogsContainer messages={props.messages} />}/> */}