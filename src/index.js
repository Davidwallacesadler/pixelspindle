import icons from './icons'
import replace from './replace'

// Returns a string with svg contents if a match is found:
const getPsSVG = name => {
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

export { icons, replace, vuePlugin }
