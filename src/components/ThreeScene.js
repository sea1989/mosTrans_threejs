import React, { useEffect } from 'react';

import MainThreeScene from "../classes/MainThreeScene";


export default function ThreeScene({ metalicValue, roughnessValue }) {

  useEffect(() => {


    MainThreeScene.init(document.getElementById('three'), metalicValue, roughnessValue);

    return function () {
      MainThreeScene.clear()
    }

  }, [metalicValue, roughnessValue]);

  return (
    <div class="threeScene">
      <div class="container" id='three'></div>
    </div>
  );

};

