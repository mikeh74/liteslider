# Lite Slider


Lite Slider is a simple JavaScript package that uses CSS and JavaScript to create a lightweight and accessible alternative to popular slider and carousel libraries.

---

## Features

- Lightweight and fast
- Accessible markup and navigation
- Uses native browser scrolling and [CSS scroll-snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap)
- Minimal vanilla JavaScript
- No dependencies
- No auto-scrolling or looping (keeps things simple)

---

If you need additional functionality, consider using a more fully-featured library like [Slick slider](https://kenwheeler.github.io/slick/) or [Tiny slider](https://github.com/ganlanyuan/tiny-slider).


## Installation

1. Download the package and extract it to your project directory.
2. Include the CSS in your HTML file:
    ```html
    <link rel="stylesheet" href="./liteslider/dist/slider.css">
    ```
3. Include the JavaScript file in your HTML file:
    ```html
    <script src="./liteslider/dist/index.js"></script>
    <script>
      slider(); // Initializes all sliders on the page
    </script>
    ```

## Quick Start

Basic example:

```html
<div class="slider">
  <div class="slider-nav hidden">
    <button type="button" class="slider-button slider-prev">Previous</button>
    <button type="button" class="slider-button slider-next">Next</button>
  </div>
  <div class="slider-inner">
    <div class="slider-item"><img alt="" src="./images/img1.jpg"></div>
    <div class="slider-item"><img alt="" src="./images/img2.jpg"></div>
    <div class="slider-item"><img alt="" src="./images/img3.jpg"></div>
    <div class="slider-item"><img alt="" src="./images/img4.jpg"></div>
    <div class="slider-item"><img alt="" src="./images/img5.jpg"></div>
    <div class="slider-item"><img alt="" src="./images/img6.jpg"></div>
    <div class="slider-item"><img alt="" src="./images/img7.jpg"></div>
    <div class="slider-item"><img alt="" src="./images/img8.jpg"></div>
    <div class="slider-item"><img alt="" src="./images/img9.jpg"></div>
  </div>
</div>
```

---

See demo/index.html for more [examples](https://mikeh74.github.io/liteslider/demo/).

See demo/index.html for more [examples](https://mikeh74.github.io/liteslider/demo/).


## Slider CSS

The included CSS is minimal but ensures that the slider items snap to the grid and space roughly to the required size without any JavaScript.

The idea is to keep the amount of additional JavaScript to a bare minimum by using native CSS features as far as possible.

In particular, we rely on [scroll-snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap) to ensure that slider elements line up to the start of the scroll area when a user scrolls.

---

## Usage

Call `slider()` after including the JS file. All elements with the class `slider` will be initialized automatically.

### Multiple Sliders

You can have multiple sliders on the same page. Each `.slider` element will be initialized.

### Options

Currently, there are no configuration options. The slider is designed to be as simple as possible.

---

## Accessibility

- Keyboard navigation is supported via tabbing and arrow keys.
- Buttons are focusable and use semantic HTML.
- Images should include descriptive `alt` text for best accessibility.

---

## Browser Support

Lite Slider works in all modern browsers that support CSS scroll-snap and ES6 JavaScript.

Tested on:
- Chrome
- Firefox
- Safari
- Edge

---

## API Reference

**slider()**

Initializes all sliders on the page. No arguments required.

---

## License

MIT License. See [LICENSE](LICENSE) for details.
