# Lite Slider

Lite Slider is a simple slider component that uses CSS and JavaScript to create
a lightweight and accessible alternative to popular slider libraries.

## Quick Start

Include the CSS:

```
<link rel="stylesheet" href="./liteslider/css/slider.css">
```

The slider.js is setup as an es6 module so can be included into a webpage like
this:

```
  <script type="module">
    import slider from './liteslider/slider.js';
    slider();
  </script>
```

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
