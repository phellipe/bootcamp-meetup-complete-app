import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import Header from '~/components/Header'

import { store } from '../store'

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const { signed } = store.getState().auth

  if (!signed && isPrivate) {
    return <Redirect to='/' />
  }

  if (signed && !isPrivate) {
    return <Redirect to='/dashboard' />
  }

  return (
    <Route
      {...rest}
      component={props => (
        <>
          {signed && <Header />}
          <Component {...props} />{' '}
        </>
      )}
    />
  )
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
}

RouteWrapper.defaultProps = {
  isPrivate: false,
}
