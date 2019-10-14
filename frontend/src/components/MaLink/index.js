import React from 'react'
import PropTypes from 'prop-types'

import { StyledLink } from './styles'

export default function MaLink({ title, ...props }) {
  return <StyledLink {...props}>{title}</StyledLink>
}

MaLink.propTypes = {
  title: PropTypes.string.isRequired,
}
