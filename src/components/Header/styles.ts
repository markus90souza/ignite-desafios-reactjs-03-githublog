import styled from 'styled-components'
import bg from './../../assets/images/bg.png'

export const Container = styled.header`
  width: 100%;
  height: 18.5rem;
  background: url(${bg}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 148px;
    height: 98px;
    margin-bottom: 5rem;
  }

  @media screen and (max-width: 600px) {
    img {
      width: 118px;
      height: 78px;
    }
  }
`
