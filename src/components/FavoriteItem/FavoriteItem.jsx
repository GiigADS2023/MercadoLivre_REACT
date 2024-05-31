import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

import './FavoriteItem.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function FavoriteItem({ data }) {

  const { favoriteItems, setFavoriteItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updatedItems = favoriteItems.filter((item) => item.id != id);
    setFavoriteItems(updatedItems);
  };

  return (
    <section className="favorite-item">
      <img
        src={thumbnail}
        alt="imagem do produto"
        className="favorite-item-image"
      />

      <div className="favorite-item-content">
        <h3 className="favorite-item-title">{title}</h3>
        <h3 className="favorite-item-price">{formatCurrency(price, 'BRL')}</h3>

        <button
          type="button"
          className="button__remove-item"
          onClick={ handleRemoveItem }
        >
          <FaTrash />
        </button>
      </div>
    </section>
  );
}

export default FavoriteItem;

FavoriteItem.propTypes = {
  data: propTypes.object
}.isRequired;
