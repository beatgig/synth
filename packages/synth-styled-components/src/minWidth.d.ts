import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `min-width` property. If no `tokenName`
 * is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { minWidth } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${minWidth('primary')} => min-width: 100px;
 * `)
 */
declare function minWidth(tokenName?: string): <T>(props: T) => string

export default minWidth