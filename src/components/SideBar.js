import React from 'react';
import GameCard from './GameCard';

function SideBar(props) {

  
  return (
    <div className={props.className}>
      {Object.entries(props.games).map(([key, value]) => (
        <GameCard 
          key={key}
          gameName={key} 
          buttonName={value.name} 
          setSelectedGame={props.setSelectedGame}
        />
      ))}
    </div>
  );
}

export default SideBar;
  