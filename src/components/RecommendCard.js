import React from 'react';

import '../styles/RecommendCard.css';

function RecommendCard(props) {
    return (
    
      <div className='recommend-card-parent' >
        <div className='image-container'><h1>{props.name}</h1></div>
        <div className='price-container'>price</div>
       
      </div>

    );
}
  
  export default RecommendCard;