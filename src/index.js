import classnames from 'classnames/dedupe'
import iconJSON from './icons.json'

const DEFAULT_ATTRS = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 500 500',
  fill: '#000000',
}
class Icon {
  constructor(name, contents, tags = []) {
    this.name = name
    this.contents = contents
    this.tags = tags
    this.attrs = {
      ...DEFAULT_ATTRS,
      ...{ class: `ps ps-${name}` },
    }
  }
  toSvg(attrs = {}) {
    const combinedAttrs = {
      ...this.attrs,
      ...attrs,
      ...{ class: classnames(this.attrs.class, attrs.class) },
    }

    return `<svg ${attrsToString(combinedAttrs)}>${this.contents}</svg>`
  }
  toString() {
    return this.contents
  }
}

function attrsToString(attrs) {
  return Object.keys(attrs)
    .map(key => `${key}="${attrs[key]}"`)
    .join(' ')
}

const icons = Object.keys(iconJSON)
  .map(key => new Icon(key, iconJSON[key]))
  .reduce((object, icon) => {
    object[icon.name] = icon
    return object
  }, {})

// Returns a string with svg contents if a match is found:
const getPsSvg = name => {
  if (typeof name !== `string`) {
    console.error(`PixelSpindle Plugin Error - Icon name must be a string`)
    return ``
  }
  const icon = icons[name]
  if (icon) {
    return icon.toSvg()
  }
  console.error(`PixelSpindle Plugin Error - No icon matches ${name}`)
  return ``
}

// Returns [{ name: , svg: }, ...]:
const getPsSvgs = names => {
  if (typeof names !== `object` || !names.length) {
    console.error(
      `PixelSpindle Error - getPsSvgs expects an array of icon name strings`,
    )
    return []
  }
  return names.map(name => ({
    name,
    svg: getPsSvg(name),
  }))
}

const vuePlugin = {
  install(Vue, options) {
    Vue.prototype.$getPsSvg = getPsSvg
    Vue.prototype.$getPsSvgs = getPsSvgs
  },
}

export { icons, vuePlugin }
