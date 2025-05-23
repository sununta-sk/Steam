import React from "react";
import PlayBarInformation from "./PlayBar-Information";
import PlayButton from "./PlayButton";
import IconButton from "./IconButton";
import { FaCalendar, FaCog, FaCloud, FaClock } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function PlayBar(props) {
  const playBarInfo = props.playBarInformation || [
    "Not Available",
    "Not Available",
    "Not Available",
  ];

  return (
    <div className="h-full flex bg-gray-700">
      

      <div className=" w-56 h-full">
      <PlayButton className="" />
     </div>

      <div className="h-full flex-1 flex p-2 gap-3 items-center justify-center ">
        <IconButton icon={<FaCog />} />
        <IconButton icon={<FaInfoCircle />} />
        <IconButton icon={<FaHeart />} /> 
      </div>
    </div>
  );
}

export default PlayBar;



{/* <div className="hidden">
<PlayBarInformation
  icon={<FaCloud />}
  heading="CLOUD STATUS"
  subHeading={playBarInfo[0]}
/>
<PlayBarInformation
  icon={<FaCalendar />}
  heading="LAST PLAYED"
  subHeading={playBarInfo[2]}
/>
<PlayBarInformation
  icon={<FaClock />}
  heading="PLAY TIME"
  subHeading={playBarInfo[1]}
/>
</div> */}