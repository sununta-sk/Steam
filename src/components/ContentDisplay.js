import React from 'react';
import '../styles/BelowBar.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ContentDisplay() {
 
  const word = "hello";
  const word2 = "there";
  
  let combinedWords = "Button";


  const joinWords = () => {
    combinedWords = word + word2;
    console.log(combinedWords);
  }


  return (
    <div>
 <button onClick={joinWords}>{combinedWords}</button>
    </div>
  );
}

export default ContentDisplay;