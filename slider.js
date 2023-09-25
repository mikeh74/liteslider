// Dependencies: slider-factory.js, pager-factory.js, utils.js
import makeSlider from './src/slider-factory.js';

/**
 *
 * @param {Object} Options object
 */
const slider = function({
  container = '.slider',
  responsive = {
    0: {
      items: 1,
      gutter: 20,
    },
    576: {
      items: 2,
      gutter: 20,
    },
    768: {
      items: 3,
      gutter: 20,
    },
    992: {
      items: 4,
      gutter: 20,
    },
  },
  hideBtnClass = 'hidden',
} = {}) {
  /**
   * Get a list of all the slider items on the page
   */
  const sliders = document.querySelectorAll(container);

  /**
   * Initialise sliders from a NodeList based on the current selector
   */
  sliders.forEach((slider) => {
    makeSlider(slider, responsive, hideBtnClass);
  });
};

export default slider;
