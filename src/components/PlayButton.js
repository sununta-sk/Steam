import React from "react";
import { FaDownload, FaPlay } from "react-icons/fa";

function PlayButton(props) {
  return (
    <div className=" h-full w-full flex items-center justify-center gap-1 p-6">

      <button className="h-full w-36 flex text-2xl items-center justify-center text-white bg-lime-400 rounded-tl-sm rounded-bl-sm gap-2">
          <FaPlay className="text-center" />
          PLAY
      </button>

      <button className="h-full flex-1 flex items-center justify-center text-white bg-lime-400 rounded-tr-sm rounded-br-sm">
        <FaDownload />
      </button>
    </div>
  );
}

export default PlayButton;
