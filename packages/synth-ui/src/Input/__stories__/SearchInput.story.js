import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import SearchInput from '../src/SearchInput'

storiesOf('Input/SearchInput', module)
  .addDecorator(centered)
  .add('default', () => <SearchInput />)
