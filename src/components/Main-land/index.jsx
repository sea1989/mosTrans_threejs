import React, { useState } from 'react';
import ThreeScene from '../ThreeScene';

import four from '../../assets/four.svg';
import logo from '../../assets/Logo.png';

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

import './style.css';

function MainLand() {
  const [metalicValue, setMetalicValue] = useState(0);
  const [roughnessValue, setroughnessValue] = useState(0.4);
  const [colorValue, setColorValue] = useState('#8358FF');

  return (
    <main className='main'>
      <section className='left-side' style={{background: colorValue}}>
        <a href='https://ictransport.ru/'>
          <img className='ava' src={logo} width='142' height='40' alt='logo' />
        </a>
        <img className='four-left' src={four} alt='four' />
      </section>
      <section className='right-side'>
        <div className='panel'>
          <h1>Ошибка 404</h1>
          <p>
            К сожалению, этой страницы не существует, но есть другие, тоже
            хорошие
          </p>

          <div className='button-wrapper'>
            <a href='https://ictransport.ru/' className='button' style={{background: colorValue}}>
              На главную
            </a>
            <a
              href='https://ictransport.ru/contacts'
              className='button button-contacts'
            >
              Контакты
            </a>
          </div>

          <section className='panel-setting'>
            <RangeSlider
              value={metalicValue}
              min={0}
              max={1}
              step={0.2}
              onChange={(changeEvent) =>
                setMetalicValue(parseFloat(changeEvent.target.value))
              }
            />

            <RangeSlider
              value={roughnessValue}
              min={0}
              max={1}
              step={0.2}
              onChange={(changeEvent) =>
                setroughnessValue(parseFloat(changeEvent.target.value))
              }
            />

            <span class='colorPicker'>
              <input
                id='body-color'
                type='color'
                value={colorValue}
                onChange={(changeEvent) =>
                  setColorValue(changeEvent.target.value)
                }
              ></input>
              <br />
              Body
            </span>
          </section>
        </div>
        <img className='four-right' src={four} alt='four' />
      </section>
      <div className='canvas-wrapper'>
        <ThreeScene
          metalicValue={metalicValue}
          roughnessValue={roughnessValue}
          colorValue={colorValue}
        />
      </div>
    </main>
  );
}

export default MainLand;
