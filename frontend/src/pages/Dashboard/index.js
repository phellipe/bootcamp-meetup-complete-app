import React, { useEffect, useState } from 'react'
import { MdNavigateNext, MdError } from 'react-icons/md'
import { isBefore, format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { FaPlus } from 'react-icons/fa'

import api from '~/services/api'
import history from '~/services/history'

import Container from '~/components/Container'
import MaButton from '~/components/MaButton'
import Loader from '~/components/Loader'

import { Wrapper, MeetUp, Alert, LoaderContainer } from './styles'

export default function Dashboard() {
  const [isLoading, setIsLoadig] = useState(true)
  const [meetUps, setMeetUps] = useState([])

  useEffect(() => {
    async function loadMeetUps() {
      const response = await api.get('meetups')

      const data = response.data.map(meetUp => ({
        ...meetUp,
        formatedDate: format(
          parseISO(meetUp.date_time),
          "d 'de' MMMM', às' HH:mm",
          {
            locale: pt,
          }
        ),
        isPast: isBefore(parseISO(meetUp.date_time), new Date()),
      }))

      setMeetUps(data)
      setIsLoadig(false)
    }

    loadMeetUps()
  }, [])

  function handleMeetUpClick(meetUp) {
    history.push('/details', { meetUp })
  }

  function handleNewMeetUpClick() {
    history.push('/register-meetup')
  }

  function renderMeetUps() {
    if (isLoading) {
      return (
        <LoaderContainer>
          <Loader size='30px' />
        </LoaderContainer>
      )
    }

    if (meetUps.length <= 0) {
      return (
        <Alert>
          <MdError color='#fff' size={120} />
          <h1>
            Não existem Meetups cadastrados, cadastre um clicando em novo
            meetup.
          </h1>
        </Alert>
      )
    }

    return meetUps.map(meetUp => (
      <MeetUp key={meetUp.id} onClick={() => handleMeetUpClick(meetUp)}>
        <strong>{meetUp.title}</strong>
        <div>
          <time>{meetUp.formatedDate}</time>
          <MdNavigateNext color='#fff' size={30} />
        </div>
      </MeetUp>
    ))
  }

  return (
    <Container>
      <Wrapper>
        <header>
          <h1>Meus meetups</h1>
          <MaButton onClick={handleNewMeetUpClick}>
            <FaPlus />
            Novo meetup
          </MaButton>
        </header>
        <ol>{renderMeetUps()}</ol>
      </Wrapper>
    </Container>
  )
}
