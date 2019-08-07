# InOb

[![Latest version](https://img.shields.io/npm/v/inob.svg)](https://npm.im/inob)
![npm downloads](https://img.shields.io/npm/dt/inob.svg)
[![License](https://img.shields.io/github/license/kidonng/inob.svg)](LICENSE)

Yet another [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) wrapper. Default behavior is a lazy load library ([demo](https://codesandbox.io/s/inob-demo-i0160)).

## Install

### Package Managers

- `npm i inob`
- `yarn add inob`

### ES Modules

- `import inob from 'https://cdn.jsdelivr.net/npm/inob'`
- `import inob from 'https://unpkg.com/inob'`

## Usage

**NOTE** This module uses `InterSectionObserver`. You may also want to check out [browser compatibility](https://caniuse.com/#feat=intersectionobserver) and [polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill).

```js
import { inob } from 'inob'

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
