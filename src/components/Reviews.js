import React from 'react';

function Reviews(props) {

  
  return (
    <div className={props.className}>
      <h1 className="text-2xl font-bold">Reviews</h1>
      {props.reviews && props.reviews.map((review, index) => (
        <div key={index}>
          <h3>{review.name}</h3>
          <p>{review.rating}</p>
          <p>{review.review}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
