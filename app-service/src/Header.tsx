import React from 'react';
import logo from './logo.svg';
import './styles/Header.css';
import headeraImg from './images/bc図鑑.png'

const Header = () => {
  return (
    <div className="bc-header">
      <img src={headeraImg}/>
    </div>
  );
}

export default Header;
