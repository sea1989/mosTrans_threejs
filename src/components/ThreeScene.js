import React, { useEffect } from 'react';

import MainThreeScene from "../classes/MainThreeScene";


export default function ThreeScene({ metalicValue }) {

  useEffect(() => {


    MainThreeScene.init(document.getElementById('three'), metalicValue);

    return function () {
      MainThreeScene.clear()
    }

  }, [metalicValue]);

  return (
    <div class="threeScene">
      <div class="container" id='three'></div>
    </div>
  );

};

