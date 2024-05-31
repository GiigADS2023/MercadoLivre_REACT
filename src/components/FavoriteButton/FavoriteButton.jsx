import React, { useContext } from 'react';
import { MdFavoriteBorder } from 'react-icons/md';

import './FavoriteButton.css';
import AppContext from '../../context/AppContext';

function FavoriteButton() {
  const { favoriteItems, isFavoriteVisible, setIsFavoriteVisible } = useContext(AppContext); 
  
  return ( 
    <button 
      type="button" 
      className="favorite__button"
      onClick={() => setIsFavoriteVisible(!isFavoriteVisible)}
    >
      <MdFavoriteBorder />
      {favoriteItems.length > 0 && <span className="favorite__status">{favoriteItems.length}</span>}
    </button>
  );
}

export default FavoriteButton;
