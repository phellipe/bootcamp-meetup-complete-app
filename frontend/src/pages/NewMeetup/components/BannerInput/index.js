import React, { useState, useRef, useEffect } from 'react'
import { useField } from '@rocketseat/unform'

import api from '~/services/api'

import { Container } from './styles'

export default function BannerInput() {
  const { defaultValue, registerField } = useField('banner')

  const [preview, setPreview] = useState(defaultValue && defaultValue.url)
  const [file, setFile] = useState(defaultValue && defaultValue.id)

  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'bannerId',
        ref: ref.current,
        path: 'dataset.file',
      })
    }
    // eslint-disable-next-line
  }, [ref.current])

  async function handleChange(e) {
    const data = new FormData()

    data.append('file', e.target.files[0])

    const response = await api.post('files', data)

    const { id, url } = response.data

    setFile(id)
    setPreview(url)
  }

  return (
    <Container>
      <label htmlFor='banner'>
        {preview ? (
          <img src={preview} alt='' />
        ) : (
          <h2>Selecionar uma imagem</h2>
        )}

        <input
          type='file'
          id='banner'
          accept='image/*'
          onChange={handleChange}
          data-file={file}
          ref={ref}
        />
      </label>
    </Container>
  )
}
