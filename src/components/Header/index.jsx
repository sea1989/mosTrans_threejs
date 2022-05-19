import React from 'react';
import './style.css';
import logo from '../../assets/Logo.png';
import fox from '../../assets/fox-authorization.svg';


function Header() {
  return (
    <div className='header'>
      <a href='#' class='header__topLogo'>
        <img src={logo} width='142' height='40' alt='logo' />
      </a>

      <nav className='nav'>
        <div className='nav__item'>Menu1</div>
        <div className='nav__item'>Menu1</div>
        <div className='nav__item'>Menu1</div>
        <div className='nav__item'>Menu1</div>
        <button className='other-icon__authorize'>
          <img className='authorize__mask' src={fox} alt='' />
          <p className='authorize__text'>Authorize</p>
        </button>
      </nav>
    </div>
  );
}

export default Header;
