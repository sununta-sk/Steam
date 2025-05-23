import React from "react";
import ContentCard from "./ContentCard";

function ContentSection(props) {
    return (
        <div className="bg-gradient-to-bl from-gray-600/50 to-gray-900  
        h-full w-full flex flex-col p-2 gap-2 ">
            <ContentCard />
            <ContentCard />

            
        </div>
    );
}

export default ContentSection;


