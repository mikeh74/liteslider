# Lite Slider

Lite Slider is a simple JavaScript package that uses CSS and JavaScript to create a lightweight and accessible alternative to popular slider and carousel libraries.

It does not provide automatic scrolling or loop back to the start. It relies on native browser scrolling and minimal vanilla JavaScript.

This is a very lightweight option. If you need additional functionality, consider using a more fully-featured library like Slick Slider or Owl Carousel.


## Installation

You can install the package locally in your project or via npm.

### Local Installation

1. Download the package and extract it to your project directory.
2. Include the CSS in your HTML file:
    ```html
    <link rel="stylesheet" href="./liteslider/dist/slider.css">
    ```
3. Include the JavaScript file in your HTML file:
    ```html
    <script src="./liteslider/dist/index.js"></script>
    <script>
      slider();
    </script>
    ```

### NPM Installation

To install the package via npm, run the following command in your project directory:
```sh
npm install -D liteslider
```

Assuming you are using a module bundler like Webpack, you can import the CSS and JavaScript in your JavaScript file:

```js
import { slider } from 'liteslider';
slider();
```

Depending on your CSS setup, you might want to include the CSS reference in your Webpack setup or keep it separate. You can copy the `dist/slider.css` file to somewhere locally in your project or use the uncompiled SCSS found in `src/slider.scss`.


## Quick Start

Basic example:

```html
<div class="slider">
  <div class="slider-nav hidden">
    <button type="button" class="slider-button slider-prev">Previous</button>
    <button type="button" class="slider-button slider-next">Next</button>
  </div>
  <div class="slider-inner">
    <div class="slider-item"><img class="four-three" alt="" src="./images/img1.jpg"></div>
    <div class="slider-item"><img class="four-three" alt="" src="./images/img2.jpg"></div>
    <div class="slider-item"><img class="four-three" alt="" src="./images/img3.jpg"></div>
    <div class="slider-item"><img class="four-three" alt="" src="./images/img4.jpg"></div>
    <div class="slider-item"><img class="four-three" alt="" src="./images/img5.jpg"></div>
    <div class="slider-item"><img class="four-three" alt="" src="./images/img6.jpg"></div>
    <div class="slider-item"><img class="four-three" alt="" src="./images/img7.jpg"></div>
    <div class="slider-item"><img class="four-three" alt="" src="./images/img8.jpg"></div>
    <div class="slider-item"><img class="four-three" alt="" src="./images/img9.jpg"></div>
  </div>
</div>
```

See demo/index.html for more [examples](https://mikeh74.github.io/liteslider/).


## Slider CSS

The included CSS is minimal but ensures that the slider items snap to the grid and space roughly to the required size without any JavaScript.

The idea is to keep the amount of additional JavaScript to a bare minimum by using native CSS features as far as possible.

In particular, we rely on [scroll-snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap) to ensure that slider elements line up to the start of the scroll area when a user scrolls.
