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

/**
 * This function takes a selector where the player will be placed.
 * 
 * The player has a next and previous button to navigate through the videos.
 *
 * The function should return an object with the following methods:
 *  - play: plays the current video
 *  - next: plays the next video
 *  - previous: plays the previous video
 * 
 * @param {Object} selector
 */
const ShortsPlayer = function(selector){
  selector = selector || '.slider-modal';

  const modalTemplate = `
  <div class="slider-modal">
    <div class="slider-modal-inner" role="dialog">
      <div class="slider-modal--indicators"></div>
      <div class="slider-modal-buttons">
        <button type="button" class="slider-modal-button--prev">&lt; Previous</button>
        <button type="button" class="slider-modal-button--next">&gt; Next</button>
      </div>
      <div class="slider-modal-content"></div>
      <button type="button" class="slider-modal--close">X Close</button>
    </div>
  </div>`

  document.body.insertAdjacentHTML('beforeend', modalTemplate);

  let videos = [];
  let currentId = null;
  const modal = document.querySelector(selector);
  const modalContent = modal.querySelector('.slider-modal-content');
  const modalClose = modal.querySelector('.slider-modal--close');
  const modalNext = modal.querySelector('.slider-modal-button--next');
  const modalPrev = modal.querySelector('.slider-modal-button--prev');

  modalClose.addEventListener('click', (e) => {
    e.preventDefault();
    player.close();
  });

  modalNext.addEventListener('click', (e) => {
    e.preventDefault();
    player.next();
  });

  modalPrev.addEventListener('click', (e) => {
    e.preventDefault();
    player.previous();
  });

  // trap focus within the modal
  modal.addEventListener('keydown', (e) => {
    if(e.key === 'Tab'){
      if(e.shiftKey){
        if(document.activeElement === modalPrev){
          e.preventDefault();
          modalClose.focus();
        }
      } else {
        if(document.activeElement === modalClose){
          e.preventDefault();
          modalPrev.focus();
        }
      };
    };

    if(e.key === 'Escape'){
      e.preventDefault();
      player.close();
    }
    if(e.key === 'ArrowRight'){
      e.preventDefault();
      player.next();
    }
    if(e.key === 'ArrowLeft'){
      e.preventDefault();
      player.previous();
    }

  });

  const createIframe = function(videoId, title){
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}`);
    iframe.setAttribute('width', '418');
    iframe.setAttribute('height', '742');
    iframe.setAttribute('title', title);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    return iframe;
  };

  const getIndexOfCurrentId = function(){
    return videos.indexOf(currentId);
  }

  const getNextId = function(){
    const index = getIndexOfCurrentId();
    return videos[index + 1];
  }

  const getPreviousId = function(){
    const index = getIndexOfCurrentId();
    return videos[index - 1];
  }

  const setPlayer = function(videoId){
    modalContent.innerHTML = '';
    modalContent.appendChild(createIframe(videoId, "Shorts Player"));
    currentId = videoId;
    setActiveIndicator();
  }

  /**
   * Setup the indicators
   * Count the number of items in the videos array and then add that number of indicators
   * as children of the slider-modal--indicators element
   */
  const setupIndicators = function(){
    const indicators = modal.querySelector('.slider-modal--indicators');
    indicators.innerHTML = '';
    videos.forEach((video, i) => {
      const indicator = document.createElement('span');
      indicator.classList.add('slider-modal--indicator');
      // indicator.addEventListener('click', (e) => {
      //   e.preventDefault();
      //   setPlayer(video);
      // });
      indicators.appendChild(indicator);
    });
  }

  const setActiveIndicator = function(){
    const index = getIndexOfCurrentId();
    const indicators = modal.querySelectorAll('.slider-modal--indicator');
    indicators.forEach((indicator, i) => {
      if(i === index){
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  };

  return {
    play: function(videoId){
      modal.classList.add('active');
      currentId = videoId;
      modalContent.appendChild(createIframe(videoId, "Shorts Player"));
      setupIndicators();
      setActiveIndicator();
      modalNext.focus();
      document.body.classList.add('slider-modal-open');
    },

    next: function(){
      setPlayer(getNextId());
    },

    previous: function(){
      setPlayer(getPreviousId());
    },

    close: function(){
      modal.classList.remove('active');
      modalContent.innerHTML = '';
      document.body.classList.remove('slider-modal-open');
    },

    videoListSet: function(videoIds){
      videos = videoIds
    },
    videoListClear: function(){
      videos = [];
    },
    videoList: function(){
      return videos;
    }
  }
};

const player = window.player = ShortsPlayer();
const els = document.querySelectorAll('[data-ytshort-id]');
const videoIds = Array.from(els).map((el) => el.getAttribute('data-ytshort-id'));

els.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const videoId = el.getAttribute('data-ytshort-id');
    player.videoListSet(videoIds);
    player.play(videoId);
  });
});
