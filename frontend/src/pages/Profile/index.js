import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

import MaInput from '~/components/MaInput'
import Container from '~/components/Container'
import MaButton from '~/components/MaButton'
import AvatarInput from './components/AvatarInput'

import { updateProfileRequest } from '~/store/modules/user/actions'

import { DivisorLine, StyledForm } from './styles'

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório.'),
  email: Yup.string()
    .email()
    .required('O e-mail é obrigatório.'),
  password: Yup.string(),
  passwordConfirmation: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('Confirme a sua senha.')
          .oneOf(
            [Yup.ref('password')],
            'A confirmção de senha não está correta.'
          )
      : field
  ),
  oldPassword: Yup.string().when('password', (password, field) =>
    password ? field.required('A senha atual é obrigatória.') : field
  ),
})

export default function Profile() {
  const dispatch = useDispatch()
  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const profile = useSelector(state => state.user.profile)

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data))

    setOldPassword('')
    setPassword('')
    setPasswordConfirmation('')
  }

  return (
    <Container>
      <StyledForm schema={schema} initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name='avatar_id' />
        <MaInput name='name' placeholder='Insira seu nome' />
        <MaInput name='email' placeholder='Insira seu email' type='email' />
        <DivisorLine />
        <MaInput
          type='password'
          name='oldPassword'
          placeholder='Sua senha atual'
          value={oldPassword}
          onChange={e => setOldPassword(e.target.value)}
        />
        <MaInput
          type='password'
          name='password'
          placeholder='Nova senha'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <MaInput
          type='password'
          name='passwordConfirmation'
          placeholder='Confirmação de senha'
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}
        />
        <MaButton type='submit'>Salvar perfil</MaButton>
      </StyledForm>
    </Container>
  )
}
