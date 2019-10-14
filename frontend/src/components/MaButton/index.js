import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './styles'
import Loader from '../Loader'

export default function MaButton({ children, isLoading, ...props }) {
  return (
    <StyledButton {...props}>{isLoading ? <Loader /> : children}</StyledButton>
  )
}

MaButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isLoading: PropTypes.bool,
  color: PropTypes.string,
}

MaButton.defaultProps = {
  isLoading: false,
  color: '#e5556e',
}
