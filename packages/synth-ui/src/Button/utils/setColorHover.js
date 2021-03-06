import { color } from '@beatgig/synth-styled-components'

import { BUTTON_INTENT_HIGHLIGHT } from '../constants'

/**
 * @typedef {object} Props
 * @property {import('@beatgig/synth-ui').ButtonIntent} intent
 * @property {boolean} outline
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setColorHover = () => ({ intent, outline, synth }) =>
  intent === BUTTON_INTENT_HIGHLIGHT
    ? `color: ${synth.getValue('color:@primary')};`
    : color('control')({ synth })

export default setColorHover
