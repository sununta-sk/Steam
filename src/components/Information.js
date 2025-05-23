import React from 'react';

function Information(props) {
  return (
    <div className={props.className}>
      <h1 className="text-2xl font-bold">Information</h1>
      <p>{props.info}</p>
    </div>
  );
}

export default Information;
