import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'
import { SynthButtonProps } from '../Button'

interface SynthIconButtonProps extends Omit<SynthButtonProps, 'children'> {}
type SynthIconButtonComponent = React.ComponentType<SynthIconButtonProps>

/**
 * @since 1.2.0
 */
declare const IconButton: React.ForwardRefExoticComponent<SynthIconButtonProps>

export { SynthIconButtonComponent, SynthIconButtonProps }
export default IconButton
