import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Nav from './components/Navigation';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header></Header>
      <Nav></Nav>
      <Profile></Profile>
      <Sidebar></Sidebar>
      <Footer></Footer>
    </div>
  );
}

export default App;