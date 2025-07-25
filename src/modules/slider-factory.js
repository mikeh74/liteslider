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
 * @property {string} hiddenClass - The class name to hide the navigation
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
  throttle,
  onScrollEnd,
} from './utils.js';

import makePager from './pager-factory.js';

const slider = {};

slider.init = function (
  sliderEl,
  responsive,
  hiddenClass = 'hidden') {
  // reference the responsive object
  this.responsive = responsive;
  this.slider = sliderEl;
  this.sliderInner = this.slider.querySelector('.slider-inner');
  this.isSliding = false;
  this.isBtnClick = false;

  // Defensive check for sliderInner
  if (!this.sliderInner) {
    console.warn('Slider inner element not found.');
    return;
  }

  // Nodelist of slider items
  this.elements = this.sliderInner.querySelectorAll('.slider-item');

  // setup elements
  this.buttons = this.slider.querySelector('.slider-nav');
  this.prevButton = this.slider.querySelector('.slider-prev');
  this.nextButton = this.slider.querySelector('.slider-next');
  this.pagerEl = this.slider.querySelector('.slider-pager');
  this.hiddenClass = hiddenClass;

  if (this.pagerEl) {
    this.pager = makePager(this);
  }

  this.addListeners();
};

slider.moveToPrevious = function () {
  if (this.isSliding) return;
  this.isSliding = true;
  slide('previous',
    this.sliderInner,
    this.getGap());
};

slider.moveToNext = function () {
  if (this.isSliding) return;
  this.isSliding = true;
  slide('next',
    this.sliderInner,
    this.getGap());
};

slider.checkButtons = function () {
  checkButtonState(
    this.sliderInner,
    this.prevButton,
    this.nextButton,
    this.isBtnClick);
  this.isBtnClick = false;
};

slider.addListeners = function () {
  if (this.prevButton) {
    this.prevButton.addEventListener(
      'click', () => {
        this.isBtnClick = true;
        this.moveToPrevious();
      });
  }

  if (this.nextButton) {
    this.nextButton.addEventListener(
      'click', () => {
        this.isBtnClick = true;
        this.moveToNext();
      });
  }

  this._onScrollEnd();
  this._keyboardNavigation();
  this._loadAndResize();
};

slider._loadAndResize = function () {
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

slider._onScrollEnd = function () {
  const that = this;

  const handleScrollEnd = () => {
    that.checkButtons();
    that.isSliding = false;
  };

  const handlePagerOnScroll = () => {
    that.checkPager();
  };

  // throttled scroll listener
  const throttledScrollHandler = throttle(handlePagerOnScroll, 50);
  this.sliderInner.addEventListener('scroll', throttledScrollHandler);

  onScrollEnd(this.sliderInner, handleScrollEnd);
};

slider._keyboardNavigation = function () {
  const that = this;
  this.sliderInner.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      that.moveToPrevious();
    }

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      that.moveToNext();
    }

    if (e.key === 'Home') {
      e.preventDefault();
      that.sliderInner.scrollTo({ left: 0, behavior: 'smooth' });
    }

    if (e.key === 'End') {
      e.preventDefault();
      that.sliderInner.scrollTo({ left: that.sliderInner.scrollWidth, behavior: 'smooth' });
    }
  });
};

slider.showHideButtons = function () {
  if (this.buttons != undefined) {
    const containerWidth = this.sliderInner.clientWidth;
    if (containerWidth >= this.tempTotalWidth) {
      this.buttons.classList.add(this.hiddenClass);
    }
    else {
      this.buttons.classList.remove(this.hiddenClass);
    }
  }
};

slider.getGap = function () {
  const opts = getResponsiveOptions(this.responsive);
  return opts['gutter'];
};

slider.getItemsToShow = function () {
  const opts = getResponsiveOptions(this.responsive);
  return opts['items'];
};

slider.getPreview = function () {
  const opts = getResponsiveOptions(this.responsive);
  if (opts['preview']) {
    return parseInt(opts['preview'], 10);
  }

  return 0;
};

slider.checkPager = function () {
  if (this.pager) {
    if (this.pager.getPageCount() === 1) {
      this.pagerEl.classList.add(this.hiddenClass);
    }
    else {
      this.pagerEl.classList.remove(this.hiddenClass);
    }

    this.slider.querySelectorAll(
      '.slider-pager-item').forEach((sliderItem) => {
      sliderItem.classList.remove('active');
    });

    this.pager.setActivePagerItem();
  }
};

const makeSlider = function (sliderElement, responsive, hiddenClass) {
  const obj = Object.create(slider);
  obj.init(sliderElement, responsive, hiddenClass);
  return obj;
};

export default makeSlider;
