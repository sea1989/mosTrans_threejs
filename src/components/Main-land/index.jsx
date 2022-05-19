import React from 'react';
import ThreeScene from '../ThreeScene';
import Advantages from '../advantages';
import Community from '../Community';
import Download from '../download';
import Header from '../Header';
import './style.css';

function MainLand() {
  return (
    <main className='main'>
      {/* <Header />
      <Advantages />
      <Download />
      <Community /> */}
      <div className='canvas-wrapper'>
      <ThreeScene />
      </div>
    </main>
  );
}

export default MainLand;
