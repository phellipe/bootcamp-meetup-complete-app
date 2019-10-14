import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

import { signInRequest } from '~/store/modules/auth/actions'

import MaInput from '~/components/MaInput'
import Container from '~/components/Container'
import MaButton from '~/components/MaButton'
import MaLink from '~/components/MaLink'

import logo from '~/assets/logo.svg'

import { MaForm } from './styles'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
})

export default function SignIn() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  function handleSignInSubmit({ email, password }) {
    dispatch(signInRequest(email, password))
  }

  return (
    <Container>
      <img src={logo} alt='MeetApp logo' />
      <MaForm schema={schema} onSubmit={handleSignInSubmit}>
        <MaInput name='email' placeholder='Digite seu e-mail' type='email' />
        <MaInput
          name='password'
          placeholder='Sua senha secreta'
          type='password'
        />
        <MaButton type='submit' isLoading={loading}>
          Entrar
        </MaButton>
      </MaForm>
      <MaLink to='/register' title='Criar conta grátis' />
    </Container>
  )
}
