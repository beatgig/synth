import styled from 'styled-components'
import { object } from 'prop-types'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  border,
  borderRadius,
  color,
  fontWeight,
  padding,
} from '@beatgig/synth-styled-components'

import { baseStyles } from '../utils'
import { Flex } from '../Flex'

const Button = styled(Flex).attrs(() => ({
  as: 'button',
  center: true,
  type: 'button',
}))`
  ${baseStyles}
  ${backgroundColor('control')}
  ${border()}
  ${borderRadius()}
  ${color('control')}
  ${fontWeight('control')}
  ${padding('control')}
  cursor: pointer;
  transition: all 0.25s ease;

  :hover {
    ${backgroundColor('control:hover')}
  }

  :focus {
    outline: 0 none;
  }
`

Button.propTypes = {
  synth: object.isRequired,
}

export default withSynth(Button)