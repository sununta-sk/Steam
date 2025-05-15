import React from 'react';
import GameCard from './GameCard';

function SideBar(props) {

  
  return (
    <div>

      <GameCard gameName = "fornite" setSelectedGame={props.setSelectedGame}/>
  <GameCard gameName = "PubG" setSelectedGame={props.setSelectedGame}/>

    </div>
  );
}

export default SideBar;
  