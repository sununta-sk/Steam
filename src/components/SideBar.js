import React from 'react';
import games from '../database/Games';
import GameCard from './GameCard';

function SideBar(props) {
  
  return (
    <div className={props.className}>

        {games.map((game) => (
            <GameCard
                gameName={game.name}
                setSelectedGame={props.setSelectedGame}
            />
        ))}
        
        

    </div>
  );
}

export default SideBar;
  