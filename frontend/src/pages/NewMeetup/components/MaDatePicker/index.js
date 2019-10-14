import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { parseISO } from 'date-fns'

import { useField } from '@rocketseat/unform'

import { StyledDatePicker } from './styles'

export default function MaDatePicker({ name, selectedDate }) {
  const ref = useRef()
  const { fieldName, registerField } = useField(name)
  const [selected, setSelected] = useState(
    selectedDate ? parseISO(selectedDate) : new Date()
  )

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear()
      },
    })
    // eslint-disable-next-line
  }, [ref.current, fieldName])

  return (
    <StyledDatePicker
      name={fieldName}
      selected={selected}
      onChange={date => setSelected(date)}
      ref={ref}
      placeholderText='Dia e hora de inicio do evento'
      showTimeSelect
      dateFormat='Pp'
    />
  )
}

MaDatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  selectedDate: PropTypes.string,
}

MaDatePicker.defaultProps = {
  selectedDate: null,
}
