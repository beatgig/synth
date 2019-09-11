import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import styled from 'styled-components'

import Select from '../src/Select'

const CustomSelect = styled(Select)`
  width: 200px;
`

storiesOf('Select', module)
  .addDecorator(centered)
  .add('default', () => (
    <CustomSelect>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </CustomSelect>
  ))