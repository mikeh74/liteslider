// Dependencies: slider-factory.js, pager-factory.js, utils.js
import makeSlider from './src/slider-factory.js';
import player from './src/shorts-player.js';

/**
 *
 * @param {Object} Options object
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

const makeShorts = function ({
  selector = '.slider-shorts',
  itemDataAttribute = 'data-ytshort-id' } = {}) {

  const shorts = document.querySelectorAll(selector);

  const attrSelector = '[' + itemDataAttribute + ']';

  shorts.forEach((short) => {
    const els = short.querySelectorAll(attrSelector);
    const videoIds = Array.from(els).map((el) => el.getAttribute(itemDataAttribute));

    short.addEventListener('click', (e) => {
      if (!e.target.closest(attrSelector)) {
        return;
      }

      const videoId = e.target.closest(attrSelector)
        .getAttribute(itemDataAttribute);
      player.videoListSet(videoIds);
      player.play(videoId);
    });
  });
};

makeShorts();
