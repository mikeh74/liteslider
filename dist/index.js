// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4YtzW":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"8lqZg":[function(require,module,exports,__globalThis) {
// This version is for use without es6 modules
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _slider = require("./modules/slider");
var _sliderDefault = parcelHelpers.interopDefault(_slider);
window.slider = (0, _sliderDefault.default);

},{"./modules/slider":"hHyK4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hHyK4":[function(require,module,exports,__globalThis) {
// Dependencies: slider-factory.js, pager-factory.js, utils.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sliderFactoryJs = require("./slider-factory.js");
var _sliderFactoryJsDefault = parcelHelpers.interopDefault(_sliderFactoryJs);
/**
 * slider is just a wrapper function that initialises the slider
 * based on the options passed to it.
 * It also sets the default options for the slider.
 *
 * Users can pass their own options to the slider function and override
 * the default options to customise the slider as required.
 *
 * @param {Object} Options object
 * @returns {void}
 */ const slider = function({ container = '.slider', responsive = {
    0: {
        items: 2,
        gutter: 16
    },
    576: {
        items: 3,
        gutter: 16
    },
    768: {
        items: 4,
        gutter: 16
    },
    992: {
        items: 5,
        gutter: 16
    },
    1200: {
        items: 6,
        gutter: 16
    }
}, hiddenClass = 'hidden' } = {}) {
    /**
   * Get a list of all the slider items on the page
   */ const sliders = document.querySelectorAll(container);
    /**
   * Initialise sliders from a NodeList based on the current selector
   */ sliders.forEach((slider)=>{
        (0, _sliderFactoryJsDefault.default)(slider, responsive, hiddenClass);
    });
};
exports.default = slider;

},{"./slider-factory.js":"eppej","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eppej":[function(require,module,exports,__globalThis) {
/**
 * @file slider-factory.js is responsible for creating and rendering the slider.
 * @module sliderFactory
 */ /**
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
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
var _pagerFactoryJs = require("./pager-factory.js");
var _pagerFactoryJsDefault = parcelHelpers.interopDefault(_pagerFactoryJs);
const slider = {};
slider.init = function(sliderEl, responsive, hiddenClass = 'hidden') {
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
    if (this.pagerEl) this.pager = (0, _pagerFactoryJsDefault.default)(this);
    this.addListeners();
};
slider.moveToPrevious = function() {
    if (this.isSliding) return;
    this.isSliding = true;
    (0, _utilsJs.slide)('previous', this.sliderInner, this.getGap());
};
slider.moveToNext = function() {
    if (this.isSliding) return;
    this.isSliding = true;
    (0, _utilsJs.slide)('next', this.sliderInner, this.getGap());
};
slider.checkButtons = function() {
    (0, _utilsJs.checkButtonState)(this.sliderInner, this.prevButton, this.nextButton, this.isBtnClick);
    this.isBtnClick = false;
};
slider.addListeners = function() {
    if (this.prevButton) this.prevButton.addEventListener('click', ()=>{
        this.isBtnClick = true;
        this.moveToPrevious();
    });
    if (this.nextButton) this.nextButton.addEventListener('click', ()=>{
        this.isBtnClick = true;
        this.moveToNext();
    });
    this._onScrollEnd();
    this._keyboardNavigation();
    this._loadAndResize();
};
slider._loadAndResize = function() {
    const setItemSizePromise = (0, _utilsJs.debouncePromise)((0, _utilsJs.setItemSize), 50);
    const handler = ()=>{
        setItemSizePromise(this).then((slider)=>{
            slider.showHideButtons();
            slider.checkButtons();
            if (slider.pager) {
                slider.pager.render();
                slider.checkPager();
            }
        }).catch((err)=>{
            console.error(err);
        });
    };
    window.addEventListener('DOMContentLoaded', handler);
    window.addEventListener('resize', handler);
};
slider._onScrollEnd = function() {
    const that = this;
    const handleScrollEnd = ()=>{
        that.checkButtons();
        that.isSliding = false;
    };
    const handlePagerOnScroll = ()=>{
        that.checkPager();
    };
    // throttled scroll listener
    const throttledScrollHandler = (0, _utilsJs.throttle)(handlePagerOnScroll, 50);
    this.sliderInner.addEventListener('scroll', throttledScrollHandler);
    (0, _utilsJs.onScrollEnd)(this.sliderInner, handleScrollEnd);
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
        if (e.key === 'Home') {
            e.preventDefault();
            that.sliderInner.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        }
        if (e.key === 'End') {
            e.preventDefault();
            that.sliderInner.scrollTo({
                left: that.sliderInner.scrollWidth,
                behavior: 'smooth'
            });
        }
    });
};
slider.showHideButtons = function() {
    if (this.buttons != undefined) {
        const containerWidth = this.sliderInner.clientWidth;
        if (containerWidth >= this.tempTotalWidth) this.buttons.classList.add(this.hiddenClass);
        else this.buttons.classList.remove(this.hiddenClass);
    }
};
slider.getGap = function() {
    const opts = (0, _utilsJs.getResponsiveOptions)(this.responsive);
    return opts['gutter'];
};
slider.getItemsToShow = function() {
    const opts = (0, _utilsJs.getResponsiveOptions)(this.responsive);
    return opts['items'];
};
slider.getPreview = function() {
    const opts = (0, _utilsJs.getResponsiveOptions)(this.responsive);
    if (opts['preview']) return parseInt(opts['preview'], 10);
    return 0;
};
slider.checkPager = function() {
    if (this.pager) {
        if (this.pager.getPageCount() === 1) this.pagerEl.classList.add(this.hiddenClass);
        else this.pagerEl.classList.remove(this.hiddenClass);
        this.slider.querySelectorAll('.slider-pager-item').forEach((sliderItem)=>{
            sliderItem.classList.remove('active');
        });
        this.pager.setActivePagerItem();
    }
};
const makeSlider = function(sliderElement, responsive, hiddenClass) {
    const obj = Object.create(slider);
    obj.init(sliderElement, responsive, hiddenClass);
    return obj;
};
exports.default = makeSlider;

},{"./utils.js":"hA2Bv","./pager-factory.js":"kNr7u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hA2Bv":[function(require,module,exports,__globalThis) {
/**
 * Returns the current responsive options based on the current viewport
 *
 * @param {Object} responsive - Object containing responsive options
 * @return {Object}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkButtonState", ()=>checkButtonState);
parcelHelpers.export(exports, "debouncePromise", ()=>debouncePromise);
parcelHelpers.export(exports, "getButtonElement", ()=>getButtonElement);
parcelHelpers.export(exports, "getResponsiveOptions", ()=>getResponsiveOptions);
parcelHelpers.export(exports, "handlePagerClick", ()=>handlePagerClick);
parcelHelpers.export(exports, "isActive", ()=>isActive);
parcelHelpers.export(exports, "setItemSize", ()=>setItemSize);
parcelHelpers.export(exports, "slide", ()=>slide);
parcelHelpers.export(exports, "throttle", ()=>throttle);
parcelHelpers.export(exports, "onScrollEnd", ()=>onScrollEnd);
const getResponsiveOptions = (responsive)=>{
    const viewportWidth = window.visualViewport.width;
    let responsiveItems = Object.keys(responsive).filter((key)=>key < viewportWidth);
    responsiveItems = responsiveItems.map((i)=>Number(i));
    const key = responsiveItems.length > 0 ? Math.max(...responsiveItems) : Math.min(...Object.keys(responsive).map(Number));
    return responsive[key];
};
/**
 * Debounce function that returns a promise
 *
 * @param {Function} func
 * @param {Number} delay
 * @return {Function}
 */ function debouncePromise(func, delay) {
    let timeoutId;
    return function(...args) {
        const context = this;
        clearTimeout(timeoutId);
        return new Promise((resolve)=>{
            timeoutId = setTimeout(()=>{
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
 */ const _withinViewport = (element, parent)=>{
    const elementRect = element.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    return elementRect.left >= parentRect.left && elementRect.left <= parentRect.right;
};
/**
 * Returns the slider item at the given index.
 * @param {string|number} index - The index of the slider item to retrieve.
 * @param {Array} elements - The array of slider items.
 * @return {HTMLElement} - The slider item at the given index.
 */ const _getSliderItem = (index, elements)=>{
    if (!elements || elements.length === 0) return null;
    if (typeof index === 'string') index = parseInt(index, 10);
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
   */ const _getItemSize = function(width, itemsToShow, gap) {
    const tempWidth = width - gap * (itemsToShow - 1);
    return tempWidth / itemsToShow;
};
/**
 *
 * @param {NodeList} elements
 * @param {Number} itemWidth
 */ function _setElementWidths(elements, itemWidth) {
    elements.forEach((item)=>{
        item.style.flexBasis = itemWidth + 'px';
    });
}
const _makePositions = function(elements, elementWidth) {
    const positions = [];
    for(let index = 0; index < elements.length; index++)positions.push(elementWidth * index);
    return positions;
};
const _scrollToNext = function(container, gutter, positions) {
    let scrollPosition = container.scrollLeft;
    scrollPosition = scrollPosition + container.clientWidth - gutter;
    const filteredPositions = positions.filter((i)=>i >= scrollPosition);
    if (filteredPositions.length == 0) return scrollPosition;
    else return Math.min(...filteredPositions);
};
const _scrollToPrevious = function(container, gutter, positions) {
    let scrollPosition = container.scrollLeft;
    scrollPosition = scrollPosition - container.clientWidth + gutter;
    const filteredPositions = positions.filter((i)=>i <= scrollPosition);
    if (filteredPositions.length == 0) return 0;
    else return Math.max(...filteredPositions);
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
   */ function _getScrollTo(container, elements, direction, gutter) {
    // let scrollPosition = container.scrollLeft;
    const elementWidth = elements[0].clientWidth + gutter;
    const positions = _makePositions(elements, elementWidth);
    let scrollTo = 0;
    switch(direction){
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
 */ const slide = function(direction, sliderInner, gap) {
    if (!sliderInner) return;
    const els = sliderInner.querySelectorAll('.slider-item');
    if (!els || els.length === 0) return;
    const scrollPosition = _getScrollTo(sliderInner, els, direction, gap);
    sliderInner.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
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
 */ function getButtonElement(start, end, els, dataLeft, i) {
    if (end > els.length) end = els.length;
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
 */ function isActive(item, elements, activeIsSet, slider) {
    const itemNo = item.getAttribute('data-page-end');
    const innerItem = _getSliderItem(itemNo, elements);
    if (!activeIsSet && innerItem && _withinViewport(innerItem, slider)) {
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
 */ function checkButtonState(sliderInner, prevButton, nextButton, btnClick = false) {
    if (prevButton) {
        if (sliderInner.scrollLeft < 50) {
            prevButton.setAttribute('disabled', true);
            // set focus to the next button
            if (btnClick) nextButton.focus();
        } else prevButton.removeAttribute('disabled');
    }
    const scrollMax = sliderInner.scrollWidth - sliderInner.clientWidth;
    if (nextButton) {
        if (sliderInner.scrollLeft >= scrollMax - 50) {
            nextButton.setAttribute('disabled', true);
            // set focus to the previous button
            if (btnClick) prevButton.focus();
        } else nextButton.removeAttribute('disabled');
    }
}
/**
 * This function returns the slider object so that it can be used in a
 * promise chain.
 *
 * @param { Object } slider
 * @return { Object }
 */ const setItemSize = function(slider) {
    const containerWidth = slider.sliderInner.clientWidth;
    const gap = slider.getGap();
    const itemWidth = _getItemSize(containerWidth - slider.getPreview(), slider.getItemsToShow(), gap);
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
 */ function handlePagerClick(element, slider, sliderInner) {
    if (!element || !slider || !sliderInner) return;
    // Defensive: ensure we have the correct element
    const pagerItem = element.closest('.slider-pager-item');
    if (!pagerItem) return;
    const scrollTo = pagerItem.getAttribute('data-scrollto');
    if (scrollTo) {
        // remove active class from all pager items
        slider.querySelectorAll('.slider-pager-item').forEach((item)=>{
            item.classList.remove('active');
        });
        // add active class to the clicked pager item
        pagerItem.classList.add('active');
        // scroll the slider to the value of the pager item
        sliderInner.scrollTo({
            left: scrollTo,
            behavior: 'smooth'
        });
    }
}
const throttle = function(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(()=>inThrottle = false, limit);
        }
    };
};
/**
 * Normalise the scroll event across browsers
 *
 * @param {HTMLElement} element
 * @param {Function} func
 * @param  {...any} args
 */ const onScrollEnd = function(element, func, ...args) {
    const context = this;
    if ('onscrollend' in window) element.addEventListener('scrollend', ()=>{
        func.apply(context, args);
    });
    else // fall back to scroll listener with timeout for browsers
    // that don't support scrollend
    element.addEventListener('scroll', ()=>{
        clearTimeout(window.scrollEndTimer);
        window.scrollEndTimer = setTimeout(()=>{
            func.apply(context, args);
        }, 50);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"kNr7u":[function(require,module,exports,__globalThis) {
/**
 * @file pager-factory.js is responsible for creating and rendering the pager
 * for the slider component.
 * @module pagerFactory
 */ /**
 * @typedef {Object} Pager
 * @property {function} init - Initializes the pager with the slider.
 * @property {function} getPageCount - Returns the total number of pages based
 * on the number of items to show.
 * @property {function} render - Renders the pager with the appropriate number
 * of pages.
 * @property {function} addEventListeners - Adds event listeners to the pager.
 * @property {function} setActivePagerItem - Sets the active pager item based
 * on the current slide.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
const pager = {};
pager.init = function(slider) {
    this.slider = slider;
    this.render();
    this.addEventListeners();
};
pager.getPageCount = function() {
    return Math.ceil(this.slider.elements.length / this.slider.getItemsToShow());
};
pager.render = function() {
    this.slider.pagerEl.innerHTML = '';
    const itemsToShow = this.slider.getItemsToShow();
    if (itemsToShow === 1) return;
    const elementArray = Array.from(this.slider.elements);
    const pages = this.getPageCount();
    for(let i = 0; i < pages; i++){
        const start = i * itemsToShow;
        const end = start + itemsToShow;
        const sub = elementArray.slice(start, end);
        const dataLeft = sub[0].offsetLeft;
        const d = (0, _utilsJs.getButtonElement)(start, end, this.slider.elements, dataLeft, i);
        this.slider.pagerEl.appendChild(d);
    }
};
pager.addEventListeners = function() {
    const slider = this.slider;
    this.slider.pagerEl.addEventListener('click', (e)=>{
        const el = e.target;
        (0, _utilsJs.handlePagerClick)(el, slider.slider, slider.sliderInner);
    });
};
pager.setActivePagerItem = function() {
    const slider = this.slider;
    let items = slider.slider.querySelectorAll('.slider-pager-item');
    // convert to array and reverse so that we run backwards from the last
    // page - easiest way to fix the last page bug
    items = Array.from(items);
    items.reverse();
    let activeIsSet = false;
    items.forEach((item)=>{
        activeIsSet = (0, _utilsJs.isActive)(item, slider.elements, activeIsSet, slider.slider);
    });
};
/**
 * Creates a pager object with the given slider.
 * @param {Object} slider - The slider object to create the pager for.
 * @return {Pager} - The pager object.
 */ const makePager = function(slider) {
    const obj = Object.create(pager);
    obj.init(slider);
    return obj;
};
exports.default = makePager;

},{"./utils.js":"hA2Bv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4YtzW","8lqZg"], "8lqZg", "parcelRequire94c2")

//# sourceMappingURL=index.js.map
