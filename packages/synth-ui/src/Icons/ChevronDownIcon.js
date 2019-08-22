import React from 'react'

import { Icon } from '../Icon'

const ChevronDownIcon = ({ className = '', ...props }) => (
  <Icon className={className} viewBox="0 0 24 24" {...props}>
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </Icon>
)

export default ChevronDownIcon
