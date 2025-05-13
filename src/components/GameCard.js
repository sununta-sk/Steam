import React from 'react';
import '../styles/GameCard.css';
import Button from './Button';

function GameCard(props) {

    return (
        <div className='parent-game-card'>
            <Button gameName={props.gameName} className='game-button' setSelectedGame={props.setSelectedGame}/>
        </div>
    );
}
export default GameCard;