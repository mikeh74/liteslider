/**
 * Returns the current responsive options based on the current viewport
 *
 * @param {Object} responsive - Object containing responsive options
 * @return {Object}
 */
const getResponsiveOptions = (responsive) => {
  const viewportWidth = window.visualViewport.width;
  let responsiveItems = Object.keys(responsive).filter(
    key => key < viewportWidth);
  responsiveItems = responsiveItems.map(i => Number(i));
  const key = responsiveItems.length > 0 ? Math.max(...responsiveItems) : Math.min(...Object.keys(responsive).map(Number));
  return responsive[key];
};

/**
 * Debounce function that returns a promise
 *
 * @param {Function} func
 * @param {Number} delay
 * @return {Function}
 */
function debouncePromise(func, delay) {
  let timeoutId;

  return function (...args) {
    const context = this;

    clearTimeout(timeoutId);
    return new Promise((resolve) => {
      timeoutId = setTimeout(() => {
        resolve(func.apply(context, args));
      }, delay);
    });
  };
}

/**
 * Checks whether HTML element appears with the visible part of the
 * visible portion of the slider
 *
 * @param {HTMLElement} element
 * @param {HTMLElement} parent - The slider element
 * @return {Boolean}
 */
const _withinViewport = (element, parent) => {
  const elementRect = element.getBoundingClientRect();
  const parentRect = parent.getBoundingClientRect();

  return (
    elementRect.left >= parentRect.left
    && elementRect.left <= parentRect.right
  );
};

/**
 * Returns the slider item at the given index.
 * @param {string|number} index - The index of the slider item to retrieve.
 * @param {Array} elements - The array of slider items.
 * @return {HTMLElement} - The slider item at the given index.
 */
const _getSliderItem = (index, elements) => {
  if (!elements || elements.length === 0) return null;
  if (typeof (index) === 'string') {
    index = parseInt(index, 10);
  }
  if (isNaN(index) || index < 0 || index >= elements.length) return null;
  return elements[index];
};

/**
   * Calculate the width of an item based on the available space and the number
   * of items to show (excluding the css gap spacing)
   *
   * @param {Number} width - the visible width of the slider
   * @param {Number} itemsToShow - the number of items that should be visible
   * @param {Number} gap - this css gap property width
   * @return {Number}
   */
const _getItemSize = function (width, itemsToShow, gap) {
  const tempWidth = width - (gap * (itemsToShow - 1));
  return tempWidth / itemsToShow;
};

/**
 *
 * @param {NodeList} elements
 * @param {Number} itemWidth
 */
function _setElementWidths(elements, itemWidth) {
  elements.forEach((item) => {
    item.style.flexBasis = itemWidth + 'px';
  });
}

const _makePositions = function (elements, elementWidth) {
  const positions = [];
  for (let index = 0; index < elements.length; index++) {
    positions.push(elementWidth * index);
  }
  return positions;
};

const _scrollToNext = function (container, gutter, positions) {
  let scrollPosition = container.scrollLeft;
  scrollPosition = scrollPosition + container.clientWidth - gutter;

  const filteredPositions = positions.filter(i => i >= scrollPosition);
  if (filteredPositions.length == 0) {
    return scrollPosition;
  }
  else {
    return Math.min(...filteredPositions);
  }
};

const _scrollToPrevious = function (container, gutter, positions) {
  let scrollPosition = container.scrollLeft;
  scrollPosition = scrollPosition - container.clientWidth + gutter;

  const filteredPositions = positions.filter(i => i <= scrollPosition);
  if (filteredPositions.length == 0) {
    return 0;
  }
  else {
    return Math.max(...filteredPositions);
  }
};

/**
   * Takes a container element and a set of slider elements (which should all be
   * the same width). From this we can calculate the width of the container and
   * we can then work out what the nearest next or previous item if we are to
   * scroll the slider by the width of the container.
   *
   * @param {HTMLElement} container
   * @param {NodeList} elements
   * @param {String} direction
   * @param {Number} gutter need the gutter width
   * @return {Number}
   */
function _getScrollTo(container, elements, direction, gutter) {
  // let scrollPosition = container.scrollLeft;
  const elementWidth = elements[0].clientWidth + gutter;

  const positions = _makePositions(elements, elementWidth);

  let scrollTo = 0;

  switch (direction) {
    case 'next':
      scrollTo = _scrollToNext(container, gutter, positions);
      break;

    case 'previous':
      scrollTo = _scrollToPrevious(container, gutter, positions);
      break;

    default:
      break;
  }

  return scrollTo;
}

/**
 * Generic function to drive the slide. Just needs a direction (previous or
 * next) and will do the rest of the heavy lifting.
 *
 * @param {String} direction
 * @param {HTMLElement} sliderInner
 * @param {Object} responsive
 */
const slide = function (direction, sliderInner, gap) {
  if (!sliderInner) return;
  const els = sliderInner.querySelectorAll('.slider-item');
  if (!els || els.length === 0) return;
  const scrollPosition = _getScrollTo(
    sliderInner, els, direction, gap);
  sliderInner.scrollTo({
    left: scrollPosition,
    behavior: 'smooth',
  });
};

/**
 *
 * @param {*} start
 * @param {*} end
 * @param {*} els
 * @param {*} dataLeft
 * @param {*} i
 * @return {HTMLElement}
 */
function getButtonElement(start, end, els, dataLeft, i) {
  if (end > els.length) {
    end = els.length;
  }
  end = end - 1;

  const d = document.createElement('button');
  d.classList.add('slider-pager-item');
  d.setAttribute('data-page-start', start);
  d.setAttribute('data-page-end', end);
  d.setAttribute('data-scrollto', dataLeft);
  d.type = 'button';
  d.innerHTML = `<span>${i + 1}</span>`;
  return d;
}

/**
 * Checks if the item is active
 *
 * @param {HTMLElement} item
 * @param {NodeList} elements
 * @param {Boolean} activeIsSet
 * @param {HTMLElement} slider
 * @return {Boolean}
 */
function isActive(item, elements, activeIsSet, slider) {
  const itemNo = item.getAttribute('data-page-end');
  const innerItem = _getSliderItem(itemNo, elements);

  if (!activeIsSet
    && innerItem
    && _withinViewport(innerItem, slider)) {
    item.classList.add('active');
    activeIsSet = true;
  }
  return activeIsSet;
}

/**
 * Gets the button element
 *
 * @param {HTMLElement} sliderInner
 * @param {HTMLElement} prevButton
 * @param {HTMLElement} nextButton
 */
function checkButtonState(
  sliderInner,
  prevButton,
  nextButton,
  btnClick = false) {
  if (prevButton) {
    if (sliderInner.scrollLeft < 50) {
      prevButton.setAttribute('disabled', true);
      // set focus to the next button
      if (btnClick) {
        nextButton.focus();
      }
    }
    else {
      prevButton.removeAttribute('disabled');
    }
  }

  const scrollMax = sliderInner.scrollWidth - sliderInner.clientWidth;

  if (nextButton) {
    if (sliderInner.scrollLeft >= scrollMax - 50) {
      nextButton.setAttribute('disabled', true);
      // set focus to the previous button
      if (btnClick) {
        prevButton.focus();
      }
    }
    else {
      nextButton.removeAttribute('disabled');
    }
  }
}

/**
 * This function returns the slider object so that it can be used in a
 * promise chain.
 *
 * @param { Object } slider
 * @return { Object }
 */
const setItemSize = function (slider) {
  const containerWidth = slider.sliderInner.clientWidth;
  const gap = slider.getGap();

  const itemWidth = _getItemSize(
    containerWidth - slider.getPreview(),
    slider.getItemsToShow(),
    gap);

  slider.sliderInner.style.gap = '0 ' + gap + 'px';
  _setElementWidths(slider.elements, itemWidth);

  slider.tempTotalWidth = itemWidth * slider.elements.length + gap * (slider.elements.length - 1);
  return slider;
};

/**
 * Handle the pager click event
 *
 * @param {HTMLElement} element
 * @param {HTMLElement} slider
 * @param {HTMLElement} sliderInner
 */
function handlePagerClick(element, slider, sliderInner) {
  if (!element || !slider || !sliderInner) return;
  // Defensive: ensure we have the correct element
  const pagerItem = element.closest('.slider-pager-item');
  if (!pagerItem) return;
  const scrollTo = pagerItem.getAttribute('data-scrollto');

  if (scrollTo) {
    // remove active class from all pager items
    slider.querySelectorAll('.slider-pager-item')
      .forEach((item) => {
        item.classList.remove('active');
      });

    // add active class to the clicked pager item
    pagerItem.classList.add('active');

    // scroll the slider to the value of the pager item
    sliderInner.scrollTo({
      left: scrollTo,
      behavior: 'smooth',
    });
  }
}

const throttle = function (func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Normalise the scroll event across browsers
 *
 * @param {HTMLElement} element
 * @param {Function} func
 * @param  {...any} args
 */
const onScrollEnd = function (element, func, ...args) {
  const context = this;
  if ('onscrollend' in window) {
    element.addEventListener(
      'scrollend', () => {
        func.apply(context, args);
      });
  }
  else {
    // fall back to scroll listener with timeout for browsers
    // that don't support scrollend
    element.addEventListener('scroll', () => {
      clearTimeout(window.scrollEndTimer);
      window.scrollEndTimer = setTimeout(() => {
        func.apply(context, args);
      }, 50);
    });
  };
};

export {
  checkButtonState,
  debouncePromise,
  getButtonElement,
  getResponsiveOptions,
  handlePagerClick,
  isActive,
  setItemSize,
  slide,
  throttle,
  onScrollEnd,
};
