import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

const top = (tokens, tokenName = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `position:top:${tokenName}`)
}

export default top
