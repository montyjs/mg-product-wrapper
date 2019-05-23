import React from 'react';
import PropTypes from 'prop-types';
import Item from './carouselItem';

const Carousel = ({ images, handlers, pos }) => (
  <div className="carousel">
    <button
      type="button"
      className="left"
      onClick={handlers.handleCarouselPos}
      value="inc"
    >
      <i className="fas fa-chevron-left" />
    </button>

    <div className="row" style={{ left: pos }}>
      {images.map((img, i) => (
        <Item
          {...img}
          handler={handlers.handleImageClick}
          index={i}
          key={`thumb-${img.id}`}
        />
      ))}
    </div>

    <button
      type="button"
      className="right"
      onClick={handlers.handleCarouselPos}
      value="dec"
    >
      <i className="fas fa-chevron-right" />
    </button>
  </div>
);

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  handlers: PropTypes.arrayOf(PropTypes.func).isRequired,
  pos: PropTypes.number.isRequired,
};

export default Carousel;