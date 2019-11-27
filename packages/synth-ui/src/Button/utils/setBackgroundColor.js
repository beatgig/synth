import { backgroundColor } from '@beatgig/synth-styled-components'

import { getIntentColor } from '../../utils'

/**
 * @typedef {object} Props
 * @property {boolean} outline
 * @property {'none' | 'danger' | 'success' | 'highlight'} intent
 * @returns {<T>(props: T & Props) => string}
 */
const setBackgroundColor = () => ({ outline, intent, ...props }) => {
  if (outline) {
    return 'background-color: transparent;'
  } else {
    return backgroundColor(getIntentColor(intent, 'control'))(props)
  }
}

export default setBackgroundColor
