import React from 'react';
import { FaBars } from 'react-icons/fa';
function GameBanner(props) {

    const handleClick = () => {
        props.toggleMobileSideBar();
    }

    return (
        <div className={props.className}>

            <button onClick={handleClick} className="absolute top-4 left-4 text-white text-2xl bg-black/20">
             <FaBars />
            </button>
            <img className="w-full h-full" src={props.image} alt={props.selectedGame || 'Select a game'} /> 
           
        </div>
    );
}

export default GameBanner;
  