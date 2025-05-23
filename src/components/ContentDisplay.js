import React from "react";
import PlayBar from "./PlayBar";
import Information from "./Information";
import Reviews from "./Reviews";
import Recommended from "./Recommened";
import ContentCard from "./ContentCard";
import ContentSection from "./ContentSection";

function ContentDisplay(props) {
  return (
    <div className=" h-screen bg-white">
      <div className="h-24">
        <PlayBar
      
          selectedGame={props.selectedGame}
          playBarInformation={props.playBarInformation}
        />
      </div>

      <div className=" h-full ">
        <ContentSection />
      </div>
    </div>
  );
}

export default ContentDisplay;
