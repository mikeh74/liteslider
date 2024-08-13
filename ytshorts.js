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

const modalTemplate = `
<div id="slider-modal" class="slider-modal">
  <div class="slider-modal-inner" role="dialog">
    <div class="slider-modal--indicators"></div>
    <div class="slider-modal-buttons">
      <button type="button" class="slider-modal-button--prev">&lt; Previous</button>
      <button type="button" class="slider-modal-button--next">&gt; Next</button>
      <button type="button" class="slider-modal--close">X Close</button>
    </div>
    <div class="slider-modal-content"></div>
  </div>
</div>`

const ShortsPlayer = function(){
  const selector = '.slider-modal';

  document.body.insertAdjacentHTML('beforeend', modalTemplate);

  let videos = [];
  let currentId = null;
  let activeElement = null;

  const modal = document.querySelector(selector);
  const modalContent = modal.querySelector('.slider-modal-content');
  const modalClose = modal.querySelector('.slider-modal--close');
  const modalNext = modal.querySelector('.slider-modal-button--next');
  const modalPrev = modal.querySelector('.slider-modal-button--prev');

  const open = function(videoId){
    activeElement = document.activeElement;
    modal.classList.add('active');
    setupIndicators();
    setPlayer(videoId);
    modalNext.focus({focusVisible: true});
    document.body.classList.add('slider-modal-open');
  }

  const close = function(){
    modal.classList.remove('active');
    modalContent.innerHTML = '';
    document.body.classList.remove('slider-modal-open');
    videos = [];
    if(activeElement){
      activeElement.focus();
    }
  }

  const next = function(){
    const nextId = getNextId();
    if (nextId) setPlayer(nextId);
  };

  const previous = function(){
    const prevId = getPreviousId();
    if (prevId) setPlayer(prevId);
  }

  modal.addEventListener('click', (e) => {
    if(e.target === modal){
      close();
    }
  });

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

  const setupIndicators = function(){
    const indicators = modal.querySelector('.slider-modal--indicators');
    indicators.innerHTML = '';
    videos.forEach((video, i) => {
      const indicator = document.createElement('span');
      indicator.classList.add('slider-modal--indicator');
      indicator.dataset.index = i;
      indicators.appendChild(indicator);
    });

    // indicators.addEventListener('click', (e) => {
    //   if (e.target.classList.contains('slider-modal--indicator')) {
    //     const index = e.target.dataset.index;
    //     setPlayer(videos[index]);
    //   }
    // });
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
    open,
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

const player = ShortsPlayer();

const initShortsModal = function ({
  selector = '.slider-shorts',
  itemDataAttribute = 'data-ytshort-id' } = {}) {

  const shorts = document.querySelectorAll(selector);

  const attrSelector = '[' + itemDataAttribute + ']';

  shorts.forEach((short) => {
    const els = short.querySelectorAll(attrSelector);
    const videoIds = Array.from(els).map((el) => el.getAttribute(itemDataAttribute));
    console.log(videoIds);
    short.addEventListener('click', (e) => {
      if (!e.target.closest(attrSelector)) {
        return;
      }
      e.preventDefault();
      const videoId = e.target.closest(attrSelector)
        .getAttribute(itemDataAttribute);
      player.videoListSet(videoIds);
      player.open(videoId);
    });
  });
};

export default initShortsModal;