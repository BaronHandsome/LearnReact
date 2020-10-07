import React from 'react';
import './App.css';
import MainPage from './components/MyPage/MainPage';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Navigation';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Friends } from './components/Friends/Friends';
import { Artists } from './components/Artists/Artists';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='content'>
          <Route path='/MyPage' component={MainPage} />
          <Route path='/Dialogs' component={DialogsContainer} />
          <Route path='/News' component={News} />
          <Route path='/Music' component={Music} />
          <Route />
        </div>
        <Sidebar >
          <Route path='/Friends' component={Friends}/>
          <Route path='/Artists' component={Artists}/>
        </Sidebar>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;