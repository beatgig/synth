import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from '../Icon'

import { withForwardedRef } from '../utils'

const ArtistIcon = ({ className = '', ref, ...props }) => (
  <Icon {...props} ref={ref} viewBox="0 0 24 24">
    <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </Icon>
)

ArtistIcon.propTypes = {
  className: PropTypes.string,
}

export default withForwardedRef(ArtistIcon)
