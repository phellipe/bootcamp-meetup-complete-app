import styled from 'styled-components'

export const Container = styled.header`
  background: #000;
`

export const Content = styled.div`
  display: flex;
  max-width: 940px;
  margin: 0 auto;
  justify-content: space-between;
  padding: 15px;
  align-items: center;

  > img {
    height: 45px;
    width: 45px;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    border: 2px solid #666;
  }

  div {
    display: flex;
    flex-direction: column;
    min-width: max-content;
    margin: 0 20px;
    justify-content: center;

    strong {
      font-family: 'Roboto';
      font-family: 14px;
      font-weight: bold;
      color: #fff;
    }

    a {
      font-family: 'Roboto';
      font-size: 14px;
      color: #999;
      margin-top: 2px;
    }
  }

  button {
    width: 100px;
  }

  @media (max-width: 500px) {
    img {
      display: none;
    }
  }
`
