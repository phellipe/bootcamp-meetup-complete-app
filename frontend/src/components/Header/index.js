import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdExitToApp } from 'react-icons/md'

import MaButton from '~/components/MaButton'

import { signOut } from '~/store/modules/auth/actions'

import logo from '~/assets/logo.svg'

import { Container, Content, Profile } from './styles'

export default function Header() {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.user.profile)

  function handleLogoutClick() {
    dispatch(signOut())
  }

  return (
    <Container>
      <Content>
        <Link to='/dashboard'>
          <img src={logo} alt='MeetApp logo' />
        </Link>
        <Profile>
          <img
            src={
              profile.avatar
                ? profile.avatar.url
                : 'https://api.adorable.io/avatars/50/abott@adorable.png'
            }
            alt='Profile'
          />
          <div>
            <strong>{profile.name}</strong>
            <Link to='/profile'>Meu perfil</Link>
          </div>
          <MaButton onClick={handleLogoutClick}>
            <MdExitToApp />
            Sair
          </MaButton>
        </Profile>
      </Content>
    </Container>
  )
}
