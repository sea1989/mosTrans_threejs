import React, { useState } from 'react';
import ThreeScene from '../ThreeScene';

import four from '../../assets/four.svg';
import logo from '../../assets/Logo.png';

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

import './style.css';

function MainLand() {
  const [metalicValue, setMetalicValue] = useState(0.3);

  return (
    <main className='main'>
      <section className='left-side'>
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
            <a href='https://ictransport.ru/' className='button'>
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
              min={0.1}
              max={0.5}
              step={0.1}
              onChange={(changeEvent) =>
                setMetalicValue(parseFloat(changeEvent.target.value))
              }
            />
          </section>
        </div>
        <img className='four-right' src={four} alt='four' />
      </section>
      <div className='canvas-wrapper'>
        <ThreeScene metalicValue={metalicValue} />
      </div>
    </main>
  );
}

export default MainLand;
