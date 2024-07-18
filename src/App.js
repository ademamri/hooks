import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Listemovies from './components/Listemovies';
import Modal from './components/Modal';
import { useState } from 'react';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/home' element={<Home  />}/>
    </Routes>
    </div>
  );
}

export default App;
