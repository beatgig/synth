import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `border-radius` property. If no `tokenName`
 * is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { borderRadius } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${borderRadius('primary')} => border-radius: 5px;
 * `)
 */
declare function borderRadius(tokenName?: string): <T>(props: T) => string

export default borderRadius
