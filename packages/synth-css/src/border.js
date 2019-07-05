import {
  getCSSDeclaration,
  isTokenDeclaration,
  isTokenName,
} from '@beatgig/synth-core'

/**
 * Returns CSS declaration for the `border` property.
 *
 * @since 1.0.0
 * @param {object} tokens
 * @param {string} name
 * @returns {string}
 * @example
 *
 * import { border } from '@beatgig/synth-css'
 *
 * border({
 *   color: {
 *     border: {
 *       default_button: '#333',
 *       'default_button:hover': '#111',
 *     },
 *   },
 *   size: {
 *     border: {
 *       default_button: '1px',
 *       'default_button:hover': '2px',
 *     },
 *   },
 *   style: {
 *     border: {
 *       default_button: 'solid',
 *       'default_button:hover': 'solid',
 *     },
 *   }
 * }, 'default_button')
 * // => border-width: 1px; border-style: solid; border-color: #333;
 *
 * border({
 *   color: {
 *     border: {
 *       default_button: '#333',
 *       'default_button:hover': '#111',
 *     },
 *   },
 *   size: {
 *     border: {
 *       default_button: '1px',
 *       'default_button:hover': '2px',
 *     },
 *   },
 *   style: {
 *     border: {
 *       default_button: 'solid',
 *       'default_button:hover': 'solid',
 *     },
 *   }
 * }, 'default_button:hover')
 * // => border-width: 2px; border-style: solid; border-color: #111;
 */
export const border = (tokens, name) => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return `${getCSSDeclaration(
    tokens,
    isTokenName(name) ? name : `size:border:${name}`,
  )} ${getCSSDeclaration(
    tokens,
    isTokenName(name) ? name : `style:border:${name}`,
  )} ${getCSSDeclaration(
    tokens,
    isTokenName(name) ? name : `color:border:${name}`,
  )}`
}
