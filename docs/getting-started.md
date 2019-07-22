# Getting Started

Creating a design system with Synth revolves around the idea of design tokens. Design tokens are defined as a JSON-like object:

```javascript
export const tokens = {
  color: {
    background: {
      button: '#444',
    },
  },

  space: {
    padding: {
      button: '15px'
    },
  },
}
```

Read our [tokens](/tokens.md) guide to learn more about how to define tokens to work with Synth.

Now that we have our token declarations ready, we'll use [React](https://reactjs.org/) and [styled-components](https://www.styled-components.com/) to create UI components that will use values from our token declarations.

```javascript
import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { backgroundColor } from '@beatgig/synth-styled-components'
import { SynthProvider } from '@beatgig/synth-react'
import { withTokens } from '@beatgig/synth-css'

import { tokens } from './some/tokens/path'

/**
 * Use `SynthProvider` to be able to pass our tokens and all CSS binding
 * functions to all `children` components.
*/
const App = ({ children }) =>
  <SynthProvider value={{
    tokens,
    ...withTokens(tokens),
  }}>
    {children}
  </SynthProvider>

/**
 * The `backgroundColor` function will return another function that
 * will call the `backgroundColor` helper that was created by `withTokens` and
 * pass it the `button` token name. styled-components will then
 * call the returned `backgroundColor` function that will return
 * the `background-color` CSS declaration. If you were to implement the same
 * logic without the `@beatgig/synth-styled-components` module, it would
 * look like this:
 *
 * ${({ synth, backgroundColor }) => backgroundColor('button')}
 */
const Button = styled.button`
  ${backgroundColor('button')} /** background-color: #444; */
`

ReactDOM.render(
  <App>
    <Button>A Red Button<Button>
  </App>,
  document.getElementById('root')
)
```