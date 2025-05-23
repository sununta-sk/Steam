import React from "react";
import { FaCloud } from "react-icons/fa";


function PlayBarInformation(props) {

  return (
    <div className="">

    
      <div className="">
   
          <span className="">{props.icon}</span>
      

      </div>

      {/* heading and subheading */}
      <div className="">
        <div className="">{props.heading}</div>
        <div className="">{props.subHeading}</div>
      </div>
    </div>
  );
}

export default PlayBarInformation;
