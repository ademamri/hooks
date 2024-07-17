import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Listemovies from './components/Listemovies';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  const [search, setsearch] = useState("")
  return (
    <div className="App">
    <Navbar setsearch={setsearch} />
    <Listemovies search={search} />
    </div>
  );
}

export default App;
