import React from 'react'
import { format, parseISO } from 'date-fns'
import { Input } from '@rocketseat/unform'
import { MdSave } from 'react-icons/md'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import pt from 'date-fns/locale/pt'
import PropTypes from 'prop-types'

import Container from '~/components/Container'
import MaInput from '~/components/MaInput'
import MaButton from '~/components/MaButton'

import MaDatePicker from './components/MaDatePicker'
import BannerInput from './components/BannerInput'

import { StyledForm, ButtonWrapper } from './styles'

import history from '~/services/history'
import api from '~/services/api'

const schema = Yup.object().shape({
  bannerId: Yup.string(),
  title: Yup.string().required('O titulo é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória.'),
  dateTime: Yup.date().required('Você precisa preencher uma data.'),
  location: Yup.string().required('A localização do seu meetup é obrigatória.'),
})

export default function NewMeetup({ location }) {
  async function handleSubmit(data) {
    let resp = null

    try {
      if (location.state) {
        resp = await api.put('meetups', data, {
          params: { meetUpId: location.state.meetUp.id },
        })
      } else {
        resp = await api.post('meetups', data)
      }

      const meetUp = {
        ...resp.data,
        formatedDate: format(
          parseISO(resp.data.date_time),
          "d 'de' MMMM', às' HH:mm",
          {
            locale: pt,
          }
        ),
      }

      toast.success('Meetup salvo com sucesso')
      history.push('/details', { meetUp })
    } catch (err) {
      toast.error(
        err.response
          ? err.response.data.userMessage
          : 'Houve um erro ao salvar seu meetup, verfique os dados preenchidos'
      )
    }
  }

  return (
    <Container>
      <StyledForm
        initialData={location.state ? location.state.meetUp : null}
        onSubmit={handleSubmit}
        schema={schema}
      >
        <BannerInput />
        <MaInput maxLength={45} name='title' placeholder='Título do Meetup' />
        <Input
          multiline
          name='description'
          placeholder='Descrição do Meetup'
          className='description-textarea'
          maxLength={255}
        />
        <MaDatePicker
          name='dateTime'
          selectedDate={location.state && location.state.meetUp.date_time}
        />
        <MaInput maxLength={45} name='location' placeholder='Localização' />
        <ButtonWrapper>
          <MaButton type='submit'>
            <MdSave />
            Salvar meetup
          </MaButton>
        </ButtonWrapper>
      </StyledForm>
    </Container>
  )
}

NewMeetup.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({ meetUp: PropTypes.object }),
  }).isRequired,
}
