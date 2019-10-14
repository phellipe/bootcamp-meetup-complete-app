import styled from 'styled-components'

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border: none;
  background: ${props => props.color};
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  margin: 5px 0;

  svg {
    margin-right: 10px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
