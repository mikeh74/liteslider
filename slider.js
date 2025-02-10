// Dependencies: slider-factory.js, pager-factory.js, utils.js
import makeSlider from './src/slider-factory.js';

/**
 * slider is just a wrapper function that initialises the slider
 * based on the options passed to it.
 * It also sets the default options for the slider.
 *
 * Users can pass their own options to the slider function and override
 * the default options to customise the slider as required.
 *
 * @param {Object} Options object
 * @returns {void}
 */
const slider = function ({
  container = '.slider',
  responsive = {
    0: {
      items: 3,
      gutter: 20,
    },
    576: {
      items: 3,
      gutter: 20,
    },
    768: {
      items: 6,
      gutter: 20,
    },
    992: {
      items: 6,
      gutter: 20,
    },
  },
  hiddenClass = 'hidden',
} = {}) {
  /**
   * Get a list of all the slider items on the page
   */
  const sliders = document.querySelectorAll(container);

  /**
   * Initialise sliders from a NodeList based on the current selector
   */
  sliders.forEach((slider) => {
    makeSlider(slider, responsive, hiddenClass);
  });
};

export default slider;
