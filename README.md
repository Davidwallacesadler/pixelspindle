# Pixel Spindle

Handcrafted assets and icons to beautify your web pages and appilcations! Please note, this package is basically a fork of feather (https://github.com/feathericons/feather) with my own iconography in place of feather icons.

This package currently operates primarily as a Vue plugin using the `ps.vuePlugin` Object, or icon svg content can be accessed using `ps.icons` or through the `icons` directory in the package.

## Usage

### Node

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

#### 2. Require

```js
const ps = require('pixelspindle')
```

#### 3. Use

Get any icon using `ps.icons[name]` and use `ps.icons[name].toSvg()` to get the svg contents. A list of svg names can be found in `names.txt`

```js
const ps = require('pixelspindle')
ps.icons[`agency`].toSvg()
```

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

This will add `$getPsSvg` and `$getPsSvgs` to the Vue protoype, and as such will function as vue instance methods.

#### 3. Use

For one off icons you can use `$getPsSvg` and `v-html` to bind the svg contents into the element. Note [v-html](https://vuejs.org/v2/guide/syntax.html#Raw-HTML) must be used in place of double mustache syntax because the output needs to be Raw HTML and not plain text.

```html
<div v-html="$getPsSvg('agency')" />
```

Or the `$getPsSvgs` could be used in your Vue component to generate an array `{ name: , svg: }` objects. Below is an example using a vue method.

```html
<div
    v-for="content in getPsIcons()"
    :key="content.name"
    v-html="content.svg"
    class="my-icon-class"
/>
```

```js
methods: {
    getPsIcons() {
        const iconNames = [`accomplishments`, `action-comments`, `action-edit`]
        return this.$getPsSvgs(iconsNames)
    },
}
```
