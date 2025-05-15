import React from 'react';
import '../styles/GameCard.css';


function GameCard(props) {

    const handleClick = () => {
        props.setSelectedGame(props.gameName);

    }

    return (
        <div className='parent-game-card'>
           <button onClick={handleClick}> {props.gameName}</button>
        </div>
    )
}
export default GameCard;