import React, { useState } from "react";
import SideBar from "./components/SideBar";
import MainContainer from "./components/MainContainer";
import games from "./database/Games";
import MobileSideBar from "./components/MobileSideBar";

function App() {
  const [selectedGame, setSelectedGame] = useState("");
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);

  const toggleMobileSideBar = () => {
    setShowMobileSideBar(!showMobileSideBar);
  };

  const image = games[selectedGame]?.image;

  const playBarInformation = [
    games[selectedGame]?.status || "Not Available",
    games[selectedGame]?.playTime || "Not Available",
    games[selectedGame]?.lastPlayed || "Not Available",
  ];

  const gameInfo = games[selectedGame]?.info;
  const gameReviews = games[selectedGame]?.reviews;
  const gameRecommended = games[selectedGame]?.recommended;

  return (
    <div className=" h-screen">
      {/* <SideBar
        className="hidden md:block"
        setSelectedGame={setSelectedGame}
        games={games}
      /> */}
 <MainContainer
  
        gameInfo={gameInfo}
        gameReviews={gameReviews}
        gameRecommended={gameRecommended}
        gameName={selectedGame}
        selectedGame={selectedGame}
        image={image}
        playBarInformation={playBarInformation}
        toggleMobileSideBar={toggleMobileSideBar}
      />
      {/* <MobileSideBar
        className={`absolute w-full bottom-0 bg-gray-800 rounded-t-3xl max-h-[60vh] overflow-y-auto transition-all duration-300 ease-in-out transform ${
          showMobileSideBar ? 'translate-y-0' : 'translate-y-full'
        }`}
        setSelectedGame={setSelectedGame}
        games={games}
        toggleMobileSideBar={toggleMobileSideBar}
      /> */}
    </div>
  );
}

export default App;
