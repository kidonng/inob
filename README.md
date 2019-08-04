<h1 align="center">InOb</h1>

<div align="center">

[![Latest version](https://img.shields.io/npm/v/inob.svg?style=for-the-badge)](https://npm.im/inob)
![npm downloads](https://img.shields.io/npm/dt/inob.svg?style=for-the-badge)
[![License](https://img.shields.io/github/license/kidonng/inob.svg?style=for-the-badge)](LICENSE)

</div>

Yet another [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) ~~abuse~~ wrapper. Default behavior is a [lazyload](https://github.com/verlok/lazyload) library ([demo](https://stackblitz.com/edit/inob-demo)).

## Install

- npm: `npm i inob`
- Yarn: `yarn add inob`
- Browser (ESM): `import inob from 'https://cdn.jsdelivr.net/npm/inob'`

## Usage

This module uses `InterSectionObserver`. You may want to check out [support table](https://caniuse.com/#feat=intersectionobserver) and [polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill).

```js
import inob from 'inob'

// Selector
inob('.lazy')

// Default selector is `.inob`
inob()

// Element, NodeList or Array of elements
inob(document.querySelectorAll('.lazy'))

// Return value is the observer
const observer = inob('.lazy', target => {
  // Callback
  target.classList.add('.fadeIn')
}, {
  // Observer options
  root: document.querySelector('#scrollArea')
})
// Stop watching
observer.disconnect()
```
