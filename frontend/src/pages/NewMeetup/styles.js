import styled from 'styled-components'
import { Form } from '@rocketseat/unform'

export const StyledForm = styled(Form)`
  max-width: 800px;

  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    width: 100%;
  }

  span {
    font-family: 'Roboto';
    font-size: 14px;
    color: #e5556e;
  }

  .description-textarea {
    width: 100%;
    height: 250px;
    border: none;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin: 5px 0;
    font-family: 'Roboto';
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
    padding: 25px;
    resize: none;

    &::placeholder {
      font-family: 'Roboto';
      font-size: 18px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;

  button {
    max-width: 200px;
  }

  @media (max-width: 500px) {
    button {
      max-width: 100%;
    }
  }
`
