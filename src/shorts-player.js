
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
  <div id="slider-modal" class="slider-modal">
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

  const close = function(){
    modal.classList.remove('active');
    modalContent.innerHTML = '';
    document.body.classList.remove('slider-modal-open');
    videos = [];
  }

  const next = function(){
    setPlayer(getNextId());
  };

  const previous = function(){
    setPlayer(getPreviousId());
  }

  modalClose.addEventListener('click', (e) => {
    e.preventDefault();
    close();
  });

  modalNext.addEventListener('click', (e) => {
    e.preventDefault();
    next();
  });

  modalPrev.addEventListener('click', (e) => {
    e.preventDefault();
    previous();
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
      close();
    }
    if(e.key === 'ArrowRight'){
      e.preventDefault();
      next();
    }
    if(e.key === 'ArrowLeft'){
      e.preventDefault();
      previous();
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
    modalNext.focus();
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

    next,
    previous,
    close,
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

/**
 * This creates and returns a global player object which has the
 * following methods:
 * - play: opens the modal and plays the video
 * - next: plays the next video
 * - previous: plays the previous video
 * - close: closes the modal
 * - videoListSet: sets the list of videos to play
 * 
 */
const player = window.player = ShortsPlayer();

export default player;
