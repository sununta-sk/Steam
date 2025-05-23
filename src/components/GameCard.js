import React from "react";

function GameCard(props) {
  const handleClick = () => {
    props.setSelectedGame(props.gameName);
    props.toggleMobileSideBar();
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleClick}
        className="text-[20px] w-full h-20 text-white   hover:bg-gray-200/50 transition-all duration-300 flex items-center justify-center p-0 m-0 border-0"
      >
        {props.buttonName}
      </button>
    </div>
  );
}
export default GameCard;
