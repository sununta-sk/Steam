import React from 'react';
import '../styles/GameBanner.css';


function GameBanner(props) {


    return (
        <div >
            <button onClick={props.payElectricityBill}>Pay Electricity Bill</button>
            <button onClick={props.payWaterBill}>Pay Water Bill</button>
            <button onClick={props.payPhoneBill}>Pay Phone Bill</button>
        
        </div>
    );
}
    
    export default GameBanner;
  