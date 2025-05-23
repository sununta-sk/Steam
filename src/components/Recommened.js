import React from 'react';

function Recommended(props) {

  return (
    <div className={props.className}>
      <h1 className="text-2xl font-bold">Recommended</h1>
      {props.recommended && props.recommended.map((recommended, index) => (
        <div key={index}>
          <h3>{recommended.name}</h3>
          <p>{recommended.rating}</p>
          <p>{recommended.review}</p>
          <p>iujoiujhi;ojui;ojoi;oijio';l';l';l';l';l</p>
          <p>iujoiujhi;ojui;ojoi;oijio';l';l';l';l';l</p>
          <p>iujoiujhi;ojui;ojoi;oijio';l';l';l';l';l</p>   
          <p>iujoiujhi;ojui;ojoi;oijio';l';l';l';l';l</p>
        </div>
      ))}

    </div>
  );
}

export default Recommended;
