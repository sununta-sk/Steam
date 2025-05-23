import React from 'react';
import GameCard from './GameCard';

function MobileSideBar(props) {

  
  return (
    <div className={props.className}>
      {Object.entries(props.games).map(([key, value]) => (
        <GameCard 
          key={key}
          gameName={key} 
          buttonName={value.name} 
          setSelectedGame={props.setSelectedGame}
          toggleMobileSideBar={props.toggleMobileSideBar}
        />
      ))}
    </div>
  );
}

export default MobileSideBar;
  