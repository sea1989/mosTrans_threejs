import React, { useEffect } from 'react';

import MainThreeScene from "../classes/MainThreeScene";


export default function ThreeScene({ metalicValue, roughnessValue, colorValue }) {

  useEffect(() => {


    MainThreeScene.init(document.getElementById('three'), metalicValue, roughnessValue, colorValue);

    return function () {
      MainThreeScene.clear()
    }

  }, [metalicValue, roughnessValue, colorValue]);

  return (
    <div class="threeScene">
      <div class="container" id='three'></div>
    </div>
  );

};

