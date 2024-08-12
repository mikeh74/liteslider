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

  console.log('shorts', shorts);

  shorts.forEach((short) => {
    const els = short.querySelectorAll('[' + itemDataAttribute + ']');

    console.log('els', els);

    const videoIds = Array.from(els).map((el) => el.getAttribute(itemDataAttribute));

    short.addEventListener('click', (e) => {
      if (!e.target.closest('[' + itemDataAttribute + ']')) {
        return;
      }

      const videoId = e.target.closest(
        '[' + itemDataAttribute + ']')
        .getAttribute(itemDataAttribute);
      player.videoListSet(videoIds);
      player.play(videoId);
    });
  });
};

makeShorts();

// const shorts = document.querySelectorAll('.slider-shorts');

// shorts.forEach((short) => {

//   short.addEventListener('click', (e) => {
//     const els = short.querySelectorAll('[data-ytshort-id]');
//     const videoIds = Array.from(els).map((el) => el.getAttribute('data-ytshort-id'));

//     if (!e.target.closest('[data-ytshort-id]')) {
//       return;
//     }

//     const videoId = e.target.closest('[data-ytshort-id]').getAttribute('data-ytshort-id');
//     player.videoListSet(videoIds);
//     player.play(videoId);
//   });
// });
