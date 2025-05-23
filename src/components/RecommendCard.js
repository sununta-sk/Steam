import React from 'react';

function RecommendCard(props) {
    return (
    
      <div className='h-2/6' >
        <div className='image-container'><h1>{props.name}</h1></div>
        <div className='price-container'>price</div>
       
      </div>

    );
}
  
export default RecommendCard;