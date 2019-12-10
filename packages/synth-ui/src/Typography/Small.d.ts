import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import { TextProps } from './Text'

interface SmallProps extends TextProps {
  /**
   * The elements you want to display within the small component.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
}

type SmallComponentProps = React.HTMLAttributes<HTMLElement> &
  React.RefAttributes<HTMLElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & SmallProps

type SmallComponent = SynthReact.SynthComponent<
  SmallComponentProps,
  HTMLElement
>

/**
 * @since 1.2.0
 */
declare const Small: SmallComponent

export { SmallComponent, SmallComponentProps, SmallProps }
export default Small