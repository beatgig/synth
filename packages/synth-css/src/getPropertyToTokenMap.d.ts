export interface SnakeCaseMap {
  'animation-delay': 'motion:delay'
  'animation-duration': 'motion:duration'
  'animation-timing-function': 'motion:effect'
  'background-color': 'color:background'
  'border-color': 'color:border'
  'border-radius': 'size:radius'
  'border-style': 'style:border'
  'border-width': 'size:border'
  border: ''
  bottom: 'position:bottom'
  boxShadow: ''
  color: 'color:text'
  'font-family': 'typography:font'
  'font-size': 'size:text'
  'font-style': 'style:text'
  'font-weight': 'typography:weight'
  height: 'size:height'
  left: 'position:left'
  'letter-spacing': 'typography:spacing'
  'line-height': 'typography:lineHeight'
  'margin-bottom': 'space:margin'
  'margin-left': 'space:margin'
  'margin-right': 'space:margin'
  'margin-top': 'space:margin'
  margin: 'space:margin'
  'max-height': 'size:maxHeight'
  'max-width': 'size:maxWidth'
  'min-height': 'size:minHeight'
  'min-width': 'size:minWidth'
  opacity: 'style:opacity'
  'padding-bottom': 'space:padding'
  'padding-left': 'space:padding'
  'padding-right': 'space:padding'
  'padding-top': 'space:padding'
  padding: 'space:padding'
  right: 'position:right'
  'text-align': 'position:text'
  'text-decoration': 'typography:decoration'
  'text-transform': 'typography:transform'
  top: 'position:top'
  'transition-delay': 'motion:delay'
  'transition-duration': 'motion:duration'
  'transition-timing-function': 'motion:effect'
  width: 'size:width'
  'z-index': 'position:index'
}

export interface CamelCaseMap {
  animationDelay: 'motion:delay'
  animationDuration: 'motion:duration'
  animationTimingFunction: 'motion:effect'
  backgroundColor: 'color:background'
  borderColor: 'color:border'
  borderRadius: 'size:radius'
  borderStyle: 'style:border'
  borderWidth: 'size:border'
  border: ''
  bottom: 'position:bottom'
  boxShadow: ''
  color: 'color:text'
  fontFamily: 'typography:font'
  fontSize: 'size:text'
  fontStyle: 'style:text'
  fontWeight: 'typography:weight'
  height: 'size:height'
  left: 'position:left'
  letterSpacing: 'typography:spacing'
  lineHeight: 'typography:lineHeight'
  marginBottom: 'space:margin'
  marginLeft: 'space:margin'
  marginRight: 'space:margin'
  marginTop: 'space:margin'
  margin: 'space:margin'
  maxHeight: 'size:maxHeight'
  maxWidth: 'size:maxWidth'
  minHeight: 'size:minHeight'
  minWidth: 'size:minWidth'
  opacity: 'style:opacity'
  paddingBottom: 'space:padding'
  paddingLeft: 'space:padding'
  paddingRight: 'space:padding'
  paddingTop: 'space:padding'
  padding: 'space:padding'
  right: 'position:right'
  textAlign: 'position:text'
  textDecoration: 'typography:decoration'
  textTransform: 'typography:transform'
  top: 'position:top'
  transitionDelay: 'motion:delay'
  transitionDuration: 'motion:duration'
  transitionTimingFunction: 'motion:effect'
  width: 'size:width'
  zIndex: 'position:index'
}

/**
 * @since 2.0.0
 * @description Gets the given token's value transforming numeric values to pixel units by default.
 * @example
 * getPropertyToTokenMap() => { animation-delay: 'motion:delay', ... }
 * getPropertyToTokenMap('camelCase') => { animationDelay: 'motion:delay', ... }
 */
declare function getPropertyToTokenMap(
  format: 'snake-case' | 'camelCase' = 'snake-case',
): SnakeCaseMap | CamelCaseMap

export default getPropertyToTokenMap
