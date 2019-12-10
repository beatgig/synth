/**
 * @typedef {object} Props
 * @property {boolean} hasError
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getValue
 * @returns {<T>(props: T & Props) => string}
 */
const setBorderColorFocus = () => ({ hasError, synth }) => `
  border-color: ${
    hasError
      ? synth.getValue('@Error')
      : synth.getValue('color:border:input:focus')
  };
`

export default setBorderColorFocus