import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;

    h1 {
      color: #fff;
      font-size: 32px;
      font-family: 'Roboto';
      opacity: 0.9;
    }

    button {
      max-width: 175px;
    }

    @media (max-width: 500px) {
      flex-direction: column;

      h1 {
        margin-bottom: 30px;
      }

      button {
        max-width: 100%;
      }
    }
  }
`

export const MeetUp = styled.li`
  list-style: none;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  border-radius: 5px;
  padding: 20px 50px;
  cursor: pointer;

  strong {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Roboto';
    opacity: 0.9;
  }

  div {
    display: flex;
    align-items: center;
  }

  time {
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    font-family: 'Roboto';
    margin: 0 10px;
  }

  @media (max-width: 500px) {
    padding: 20px 20px;
  }
`

export const Alert = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.3;

  h1 {
    max-width: 520px;
    color: #fff;
    text-align: center;
    margin-top: 20px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding-top: 60px;
`
