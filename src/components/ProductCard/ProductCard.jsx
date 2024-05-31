import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { MdFavorite } from 'react-icons/md';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {
  const { title, thumbnail, price } = data;
  const { cartItems, setCartItems, favoriteItems, setFavoriteItems } = useContext(AppContext);

  const handleAddCart = () => setCartItems([...cartItems, data]);

  const handleAddFavorite = () => setFavoriteItems([...favoriteItems, data]);

  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card__image"
      />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <div className="button__container">
        <button
          type="button"
          className="button__add-cart"
          onClick={handleAddCart}
        >
          <BsFillCartPlusFill />
        </button>

        <button
          type="button"
          className="button__add-favorite"
          onClick={handleAddFavorite}
        >
          <MdFavorite />
        </button>
      </div>
    </section>
  );
}

ProductCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
