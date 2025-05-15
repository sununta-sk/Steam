import React from 'react';
import GameBanner from './GameBanner';
import ContentDisplay from './ContentDisplay';
import '../styles/MainContainer.css';

function MainContainer(props) {
  return (

    <div className='main-container'>

       <div className='game-banner'>
        <GameBanner totalBill={props.totalBill} gameName={props.gameName} payPhoneBill={props.payPhoneBill} payElectricityBill={props.payElectricityBill} payWaterBill={props.payWaterBill}></GameBanner>
    </div>



      <div className='content-display'>
        <ContentDisplay/>
        </div>
    </div>
  );
}

export default MainContainer;
