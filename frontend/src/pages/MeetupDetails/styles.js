import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 940px;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  h1 {
    font-family: 'Roboto';
    font-size: 32px;
    color: rgba(255, 255, 255, 0.9);
    flex: 1;
    align-self: center;
  }

  div {
    display: flex;
    justify-content: flex-end;
    flex: 1;

    button {
      max-width: 140px;
      margin-left: 10px;
    }

    @media (max-width: 700px) {
      justify-content: center;
      flex-direction: column;

      button {
        max-width: 100%;
        margin-left: 0;
      }
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;

    h1 {
      margin-bottom: 30px;
      text-align: center;
    }
  }
`

export const Content = styled.div`
  img {
    width: 100%;
  }

  p {
    font-family: 'Roboto';
    font-family: 18px;
    color: #fff;
    margin-top: 30px;
    line-height: 2;
  }
`

export const Footer = styled.footer`
  display: flex;
  margin-top: 30px;

  time {
    font-family: 'Roboto';
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
  }

  p {
    border-left: 2px solid rgba(255, 255, 255, 0.5);
    margin-left: 20px;
    padding-left: 20px;

    font-family: 'Roboto';
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
  }
`
