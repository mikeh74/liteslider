/**
 * @file pager-factory.js is responsible for creating and rendering the pager
 * for the slider component.
 * @module pagerFactory
 */

/**
 * @typedef {Object} Pager
 * @property {function} init - Initializes the pager with the slider.
 * @property {function} getPageCount - Returns the total number of pages based
 * on the number of items to show.
 * @property {function} render - Renders the pager with the appropriate number
 * of pages.
 * @property {function} addEventListeners - Adds event listeners to the pager.
 * @property {function} setActivePagerItem - Sets the active pager item based
 * on the current slide.
 */

import {
  getButtonElement,
  handlePagerClick,
  isActive,
} from './utils.js';

const pager = {};

pager.init = function (slider) {
  this.slider = slider;
  this.render();
  this.addEventListeners();
};

pager.getPageCount = function () {
  return Math.ceil(
    this.slider.elements.length / this.slider.getItemsToShow());
};

pager.render = function () {
  this.slider.pagerEl.innerHTML = '';
  const itemsToShow = this.slider.getItemsToShow();

  if (itemsToShow === 1) return;

  const elementArray = Array.from(this.slider.elements);
  const pages = this.getPageCount();

  for (let i = 0; i < pages; i++) {
    const start = i * itemsToShow;
    const end = start + itemsToShow;
    const sub = elementArray.slice(start, end);

    const dataLeft = sub[0].offsetLeft;

    const d = getButtonElement(
      start, end,
      this.slider.elements,
      dataLeft, i);
    this.slider.pagerEl.appendChild(d);
  }
};

pager.addEventListeners = function () {
  const slider = this.slider;

  this.slider.pagerEl.addEventListener('click', (e) => {
    const el = e.target;

    handlePagerClick(
      el, slider.slider, slider.sliderInner);
  });
};

pager.setActivePagerItem = function () {
  const slider = this.slider;
  let items = slider.slider.querySelectorAll('.slider-pager-item');

  // convert to array and reverse so that we run backwards from the last
  // page - easiest way to fix the last page bug
  items = Array.from(items);
  items.reverse();
  let activeIsSet = false;
  items.forEach((item) => {
    activeIsSet = isActive(
      item,
      slider.elements,
      activeIsSet,
      slider.slider);
  });
};

/**
 * Creates a pager object with the given slider.
 * @param {Object} slider - The slider object to create the pager for.
 * @return {Pager} - The pager object.
 */
const makePager = function (slider) {
  const obj = Object.create(pager);
  obj.init(slider);
  return obj;
};

export default makePager;
