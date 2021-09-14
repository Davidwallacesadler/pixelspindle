import icons from './icons'
import replace from './replace'

const iconsMixin = {
  created() {
    console.log(`Hello from the pixelspindle mixin!`)
  },
}
const getIconHTML = name => {
  if (typeof name !== `string`) {
    console.error(`$pxIconHTML Error - expects a string matching an icon name`)
    return ``
  }
  const icon = icons[name]
  if (icon) {
    return icon.toSvg()
  }
  console.error(`$pxIconHTML Error - No icon matches ${name}`)
  return ``
}

const PixelSpindleVue = {
  install(Vue, options) {
    Vue.mixin(iconsMixin)
    Vue.prototype.$iconHTML = getIconHTML
  },
}

export { icons, replace, PixelSpindleVue }
