import React, { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import MainContainer from './components/MainContainer';

function App() {

  const [selectedGame, setSelectedGame] = useState('hello');
  const [totalBill, setTotalBill] = useState(4100);

  const banana = 100;
const phoneBill = 2000;
const electricityBill = 2000;
const waterBill = banana;




const payPhoneBill = () => {
  if (totalBill > 0) {
    setTotalBill(totalBill - phoneBill);
  }

}

const payElectricityBill = () => {
  if (totalBill > 0) {
    setTotalBill(totalBill - electricityBill);
  }

}

const payWaterBill = () => {
  if (totalBill > 0) {  
    setTotalBill(totalBill - waterBill);
  }

}



  return (
    <div className='container'>

      <div className='side-bar'>
        <SideBar setSelectedGame={setSelectedGame}/>
      </div>
   
      <div className='main-container'>
        <MainContainer totalBill={totalBill} gameName={selectedGame} payPhoneBill={payPhoneBill} payElectricityBill={payElectricityBill} payWaterBill={payWaterBill}  />
      </div>

    </div>
  );
}

export default App;
