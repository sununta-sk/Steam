import React, { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';

import BelowBar from './components/BelowBar';


function App() {
  const [selectedGame, setSelectedGame] = useState('');

  return (
    <div className='parent-app'>
      <SideBar className='side-bar' setSelectedGame={setSelectedGame}/>
      <div className='main-page'>
        <TopBar className='top-bar' selectedGame={selectedGame}/>

        <BelowBar/>
        
      </div>
    </div>
  );
}

export default App;
