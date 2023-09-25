/**
 * @file slider-factory.js is responsible for creating and rendering the slider.
 * @module sliderFactory
 */

/**
 * Factory function to create a slider object with methods to initialize, move
 * to previous/next slide, check button states, add listeners, show/hide
 * buttons, get gap and items to show, and check pager.
 * @namespace slider
 * @property {Object} responsive - Object containing responsive options for
 * the slider.
 * @property {HTMLElement} slider - The slider element.
 * @property {HTMLElement} sliderInner - The inner slider element containing
 * the slides.
 * @property {NodeList} elements - The list of slide elements.
 * @property {HTMLElement} buttons - The slider navigation buttons element.
 * @property {HTMLElement} prevButton - The previous slide button element.
 * @property {HTMLElement} nextButton - The next slide button element.
 * @property {HTMLElement} pagerEl - The pager element.
 * @property {string} hideBtnClass - The class name to hide the navigation
 * buttons.
 * @property {Object} pager - The pager object with methods to render and set
 * active pager item.
 * @property {function} init - Method to initialize the slider with the given
 * slider element and responsive options.
 * @property {function} moveToPrevious - Method to move to the previous slide.
 * @property {function} moveToNext - Method to move to the next slide.
 * @property {function} checkButtons - Method to check the button states
 * (disabled or enabled).
 * @property {function} addListeners - Method to add event listeners for scroll,
 * keyboard navigation, load and resize.
 * @property {function} showHideButtons - Method to show or hide the navigation
 * buttons based on the container width and total width of the slides.
 * @property {function} getGap - Method to get the gap between the slides.
 * @property {function} getItemsToShow - Method to get the number of items to
 * show based on the responsive options.
 * @property {function} checkPager - Method to check the pager and set the
 * active pager item.
 */
import {
  checkButtonState,
  debouncePromise,
  getResponsiveOptions,
  setItemSize,
  slide,
} from './utils.js';

import makePager from './pager-factory.js';

const slider = {};

slider.init = function(
    sliderEl,
    responsive,
    hideBtnClass = 'hidden') {
  // reference the responsive object
  this.responsive = responsive;
  this.slider = sliderEl;
  this.sliderInner = this.slider.querySelector('.slider-inner');
  this.isSliding = false;

  // Nodelist of slider items
  this.elements = this.sliderInner.querySelectorAll('.slider-item');

  // setup elements
  this.buttons = this.slider.querySelector('.slider-nav');
  this.prevButton = this.slider.querySelector('.slider-prev');
  this.nextButton = this.slider.querySelector('.slider-next');
  this.pagerEl = this.slider.querySelector('.slider-pager');
  this.hideBtnClass = hideBtnClass;

  if (this.pagerEl) {
    this.pager = makePager(this);
  }

  this.addListeners();
};

slider.moveToPrevious = function() {
  if (this.isSliding) return;
  this.isSliding = true;
  slide('previous',
      this.sliderInner,
      this.getGap());
}

slider.moveToNext = function() {
  if (this.isSliding) return;
  this.isSliding = true;
  slide('next',
      this.sliderInner,
      this.getGap());
};

slider.checkButtons = function() {
  checkButtonState(
      this.sliderInner,
      this.prevButton,
      this.nextButton);
};

slider.addListeners = function() {
  if (this.prevButton) {
    this.prevButton.addEventListener(
        'click', this.moveToPrevious.bind(this));
  }

  if (this.nextButton) {
    this.nextButton.addEventListener(
        'click', this.moveToNext.bind(this));
  }

  this._onScrollEnd();
  this._keyboardNavigation();
  this._loadAndResize();
};

slider._loadAndResize = function() {
  const setItemSizePromise = debouncePromise(setItemSize, 50);

  const handler = () => {
    setItemSizePromise(this).then((slider) => {
      slider.showHideButtons();
      slider.checkButtons();

      if (slider.pager) {
        slider.pager.render();
        slider.checkPager();
      }
    }).catch((err) => {
      console.error(err);
    });
  };

  window.addEventListener('DOMContentLoaded', handler);
  window.addEventListener('resize', handler);
};

slider._onScrollEnd = function() {
  const that = this;

  const handleScrollEnd = () => {
    that.checkButtons();
    that.checkPager();
    that.isSliding = false;
  }

  if ('onscrollend' in window) {
    this.sliderInner.addEventListener(
        'scrollend', handleScrollEnd);
  } else {
    // fall back to scroll listener with timeout for browsers
    // that don't support scrollend
    this.sliderInner.addEventListener('scroll', (event) => {
      clearTimeout(window.scrollEndTimer);
      window.scrollEndTimer = setTimeout( handleScrollEnd, 50);
    });
  }
};

slider._keyboardNavigation = function() {
  const that = this;
  this.sliderInner.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      that.moveToPrevious();
    }

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      that.moveToNext();
    }
  });
};

slider.showHideButtons = function() {
  if (this.buttons != undefined) {
    const containerWidth = this.sliderInner.clientWidth;
    if (containerWidth >= this.tempTotalWidth) {
      this.buttons.classList.add(this.hideBtnClass);
    } else {
      this.buttons.classList.remove(this.hideBtnClass);
    }
  }
};

slider.getGap = function() {
  const opts = getResponsiveOptions(this.responsive);
  return opts['gutter'];
};

slider.getItemsToShow = function() {
  const opts = getResponsiveOptions(this.responsive);
  return opts['items'];
};

slider.checkPager = function() {
  if (this.pager) {
    this.slider.querySelectorAll(
        '.slider-pager-item').forEach((sliderItem) => {
      sliderItem.classList.remove('active');
    });

    this.pager.setActivePagerItem();
  }
};

const makeSlider = function(sliderElement, responsive, hideBtnClass) {
  const obj = Object.create(slider);
  obj.init(sliderElement, responsive, hideBtnClass);
  return obj;
};

export default makeSlider;
