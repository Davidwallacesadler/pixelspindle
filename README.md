# Pixel Spindle

Handcrafted assets and icons to beautify your web pages and appilcations! Please note, this package is basically a fork of feather (https://github.com/feathericons/feather) with my own iconography in place of feather's.

This package currently operates primarily as a Vue plugin using the `ps.vuePlugin` Object.

## Usage

### Vue
#### 1. Install

Install with [npm](https://docs.npmjs.com/getting-started/what-is-npm)

```shell
npm install pixelspindle --save
```

Or

Install with [yarn](https://yarnpkg.com)

```shell
yarn add pixelspindle
```

#### 2. Require and Register Plugin

```js
const ps = require('pixelspindle')
Vue.use(ps.vuePlugin)
```

This will add `$getPsSVG` and `$getPsSVGs` to the Vue protoype, and as such will function as instance methods.

#### 3. Use

For one off icons you can use `$getPsSVG` and `v-html` to inject the svg contents into the element.

```html
<div v-html="$getPsSVG('agency')" />
```

Or the `$getPsSVGs` could be used in your Vue component to generate an array of svg strings.
