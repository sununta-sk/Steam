import React from "react";
import { FaDownload } from "react-icons/fa";

function IconButton(props) {
  return (
    <div className="flex items-center justify-center ">
      <button className="h-10 
      w-10 
      text-gray-400 
      ring-1 
      border-2 
      border-gray-500/50 
      rounded-md 
      shadow-md 
      shadow-gray-500/50
      text-3xl
      flex items-center justify-center">
        {props.icon}
      </button>
    </div>
  );
}

export default IconButton;
