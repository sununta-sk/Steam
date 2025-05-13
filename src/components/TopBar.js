import React from 'react';
import '../styles/TopBar.css';
import games from '../database/Games';

function TopBar(props) {
    const selectedGame = games.find(game => game.name === props.selectedGame);

    return (
        <div className={props.className}>
            {selectedGame && (
                <img 
                    src={selectedGame.image} 
                    alt={selectedGame.name}
                    className='game-image' 
                />
            )}
        </div>
    );
}
  
export default TopBar;
  