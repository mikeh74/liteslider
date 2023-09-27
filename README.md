# Lite Slider

Lite Slider is a simple slider component that uses CSS and JavaScript to create
a lightweight and accessible alternative to popular slider libraries.


## Quick Start

Include the CSS:

```
<link rel="stylesheet" href="./path/to/slider.css">
```

Or create your own (see CSS section below).

The slider.js is setup as an es6 module so can be included into a webpage like
this:

```
  <script type="module">
    import slider from './liteslider/slider.js';
    slider();
  </script>
```

See index.html for working examples.


## Slider CSS

The included CSS is minimal but is enough to ensure that the slider items
snap to the grid and that they space roughly to the required size without
any javacsript.

The idea is to keep the amount of additional javascript to a bare minimum by
using native CSS features as far as possible.

In particular we are relying on [scroll-snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap) to ensure that slider elements line up to the start of
the scroll area when a user scrolls.
