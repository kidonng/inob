<h1 align="center">InOb</h1>

<div align="center">

[![Latest version](https://img.shields.io/npm/v/inob.svg?style=for-the-badge)](https://npm.im/inob)
![npm downloads](https://img.shields.io/npm/dt/inob.svg?style=for-the-badge)
[![License](https://img.shields.io/github/license/kidonng/inob.svg?style=for-the-badge)](LICENSE)

</div>

Yet another IntersectionObserver ~~abuse~~ wrapper. Default behavior is the same old lazy loader ([demo](https://kidonng.github.io/inob/)).

It is created because I want it simple enough, even than [Lozad.js](https://github.com/ApoorvSaxena/lozad.js).

## Install

- npm: `npm i inob`
- Yarn: `yarn add inob`
- Browser (ESM): See [demo](https://github.com/kidonng/inob/blob/gh-pages/index.html#L43-L47)

## Usage

This module takes advantage of [`InterSectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). You may want to check out [support table](https://caniuse.com/#feat=intersectionobserver) and [polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill) as well.

```js
import inob from 'inob'

// Selector
inob('.lazy')

// Default selector is `[data-src]`
inob()

// Element, NodeList or Array of elements
inob(document.querySelectorAll('.lazy'))

// Return value is the observer
const observer = inob('.lazy', target => {
  // Default callback
  target.src = target.dataset.src
  target.onload = () => (target.dataset.loaded = true)
}, {
  // Optional intersection observer options
  root: document.querySelector('#scrollArea')
})
// Stop watching
observer.disconnect()
```
