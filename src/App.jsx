import React from 'react';
import './App.css';
import MainPage from './components/MyPage/Profile';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Navigation';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import { Dialogs } from './components/Dialogs/DialogsContainer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      {/* <MainPage /> */}
      <Dialogs />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;