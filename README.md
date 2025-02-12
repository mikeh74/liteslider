# Lite Slider

Lite Slider is a simple slider component that uses CSS and JavaScript to create
a lightweight and accessible alternative to popular slider libraries.

## Installation

There are a couple of ways to install the package, you could download and install
it locally in your project or you could install from npm and include it in your
standard project build.

### Local Installation

If you download and install this package locally in your project then do the
following:

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

To install the package via npm, run the following command in your project
directory:

```sh
npm install -D liteslider
```

Assuming you are using a module bundler like Webpack, you can import the CSS
and JavaScript in your JavaScript file:

```js
import { slider } from 'liteslider';

slider();
```

Depending on your CSS setup you might want to include the CSS reference in your
webpack setup or you might want to keep it separate in which case you could
just copy the dist/slider.css file to somewhere locally in your project.

## Quick Start

Basic example:

```
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

See index.html for more [examples](https://mikeh74.github.io/liteslider/).


## Slider CSS

The included CSS is minimal but is enough to ensure that the slider items
snap to the grid and that they space roughly to the required size without
any javacsript.

The idea is to keep the amount of additional javascript to a bare minimum by
using native CSS features as far as possible.

In particular we are relying on [scroll-snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap)
to ensure that slider elements line up to the start of the scroll area when
a user scrolls.
