import React from 'react';

function Button(props) {
    const changeGameName = () => {
        props.setSelectedGame(props.gameName);
    }

    return (
        <button className={props.className} onClick={changeGameName}>
            
            {props.gameName}
        
        </button>
    );
}
export default Button;