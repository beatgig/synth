import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `left` property. If no `tokenName`
 * is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { left } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${left('primary')} => left: auto;
 * `)
 */
declare function left(tokenName?: string): <T>(props: T) => string

export default left
