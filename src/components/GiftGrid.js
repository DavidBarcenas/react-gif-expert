import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GiftGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <div>
      <h3 className="category__subtitle">{category}</h3>
      {loading && <p>Loading...</p>}
      <ul className="Gifs__list fadeInUp">
        {images.map((img) => (
          <li key={img.id}>
            <img src={img.url} alt={img.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

GiftGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
