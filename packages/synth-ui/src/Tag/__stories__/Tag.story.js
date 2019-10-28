import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import Tag from '../src/Tag'

storiesOf('Tag', module)
  .addDecorator(centered)
  .add('default', () => <Tag>SomeTag</Tag>)
