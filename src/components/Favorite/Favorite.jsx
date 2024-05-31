import React, { useContext } from 'react';

import './Favorite.css';
import FavoriteItem from '../FavoriteItem/FavoriteItem';
import AppContext from '../../context/AppContext';

function Favorite() {
  const { favoriteItems, isFavoriteVisible } = useContext(AppContext);

  return ( 
    <section className={`favorite ${isFavoriteVisible ? 'favorite--active' : ''}`}>
      <div className="cart-items">
        {favoriteItems.map((favoriteItem) => <FavoriteItem key={favoriteItem.id} data={favoriteItem} />)}
      </div>
    </section>
  );
}

export default Favorite;
