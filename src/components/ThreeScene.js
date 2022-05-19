import React, { useEffect } from 'react';

import MainThreeScene from "../classes/MainThreeScene";


export default function ThreeScene() {

  useEffect(() => {
    MainThreeScene.init(document.getElementById('three'));
  }, []);

  return (
    <div class="threeScene">
      <div class="container" id='three'></div>
    </div>
  );

};

