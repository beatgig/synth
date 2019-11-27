import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

const backgroundColor = (tokens, tokenName = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `color:background:${tokenName}`)
}

export default backgroundColor
