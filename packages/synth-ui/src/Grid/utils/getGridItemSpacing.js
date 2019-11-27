/**
 * Gets the grid item's spacing unit used for it's margins
 * @typedef {object} Props
 * @property {object} synth
 * @property {(tokenName: string) => string} synth.getUnit
 * @returns {<T>(props: T & Props) => string}
 */
const getGridItemSpacing = () => ({ synth }) => synth.getUnit('@spacing.2')

export default getGridItemSpacing
