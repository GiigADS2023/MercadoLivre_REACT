// Header.jsx

import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src="https://www.otabuleiro.com.br/storage/images/cache/62c277460851cdb2.png" alt="Logo" className="logo" />
        <SearchBar />
        <div className="button-container"> 
          <CartButton />
          <FavoriteButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
