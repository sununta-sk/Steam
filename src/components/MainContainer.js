import React from "react";
import GameBanner from "./GameBanner";
import ContentDisplay from "./ContentDisplay";

function MainContainer(props) {
  return (
    <div className=" h-screen overflow-y-hidden">

      <div className=" h-52">
         <GameBanner 
          className="h-1/4" 
          selectedGame={props.selectedGame} 
          image={props.image} 
          toggleMobileSideBar={props.toggleMobileSideBar} 
        />
      </div>
    
    
      <div className="h-full ">
          <ContentDisplay className="h-3/4 "
          gameReviews={props.gameReviews}
          gameRecommended={props.gameRecommended}
          selectedGame={props.selectedGame}
          gameInfo={props.gameInfo}
          playBarInformation={props.playBarInformation}
        />
      </div>

     
    </div>
  );
}

export default MainContainer;
