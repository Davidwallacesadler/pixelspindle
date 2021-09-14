// import icons from './icons'
// import replace from './replace'
import classnames from 'classnames/dedupe'
import icons from './icons.json'

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

  /**
   * Create an SVG string.
   * @param {Object} attrs
   * @returns {string}
   */
  toSvg(attrs = {}) {
    const combinedAttrs = {
      ...this.attrs,
      ...attrs,
      ...{ class: classnames(this.attrs.class, attrs.class) },
    }

    return `<svg ${attrsToString(combinedAttrs)}>${this.contents}</svg>`
  }

  /**
   * Return string representation of an `Icon`.
   *
   * Added for backward compatibility. If old code expects `ps.icons.<name>`
   * to be a string, `toString()` will get implicitly called.
   *
   * @returns {string}
   */
  toString() {
    return this.contents
  }
}

/**
 * Convert attributes object to string of HTML attributes.
 * @param {Object} attrs
 * @returns {string}
 */
function attrsToString(attrs) {
  return Object.keys(attrs)
    .map(key => `${key}="${attrs[key]}"`)
    .join(' ')
}

const iconObjects = Object.keys(icons)
  .map(key => new Icon(key, icons[key]))
  .reduce((object, icon) => {
    object[icon.name] = icon
    return object
  }, {})

// Returns a string with svg contents if a match is found:
const getPsSVG = name => {
  if (typeof name !== `string`) {
    console.error(`PixelSpindle Plugin Error - Icon name must be a string`)
    return ``
  }
  const icon = iconObjects[name]
  if (icon) {
    return icon.toSvg()
  }
  console.error(`PixelSpindle Plugin Error - No icon matches ${name}`)
  return ``
}

// Returns an object with { name : svg } value pairs:
const getPsSVGs = names => {
  if (typeof names !== `object` || !names.length) {
    console.error(
      `PixelSpindle Error - getPsSVGs expects an array of icon name strings`,
    )
    return {}
  }
  return names.reduce((acc, cur) => {
    const svg = getPsSVG(cur)
    if (svg.length) {
      Object.assign(acc, { [cur]: svg })
    }
    return acc
  }, {})
}

const vuePlugin = {
  install(Vue) {
    Vue.getPsSVG = getPsSVG
    Vue.getPsSVGs = getPsSVGs
  },
}

export { iconObjects, vuePlugin }
