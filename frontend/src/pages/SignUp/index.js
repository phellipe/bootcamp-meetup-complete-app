import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

import { signUpRequest } from '~/store/modules/auth/actions'

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
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
  name: Yup.string().required('O nome é obrigatório'),
})

export default function SignUp() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  function handleSignUpSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password))
  }

  return (
    <Container>
      <img src={logo} alt='MeetApp logo' />
      <MaForm schema={schema} onSubmit={handleSignUpSubmit}>
        <MaInput name='name' placeholder='Nome completo' />
        <MaInput name='email' placeholder='Digite seu e-mail' type='email' />
        <MaInput
          name='password'
          placeholder='Sua senha secreta'
          type='password'
        />
        <MaButton type='submit' isLoading={loading}>
          Criar conta
        </MaButton>
      </MaForm>
      <MaLink to='/' title='Já tenho login' />
    </Container>
  )
}
