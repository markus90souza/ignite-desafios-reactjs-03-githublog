import { createGlobalStyle } from 'styled-components'
import firaCode from '../assets/fonts/firacode-regular.woff'

export const Reset = createGlobalStyle`
  @font-face {
    font-family: 'FiraCode';
    src: url(${firaCode}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 0.45rem;
    }
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.gray500}
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.blue300};
      border-radius: 999px;
    }
  }
  body {
    background: ${({ theme }) => theme.colors.gray800};
    color: ${({ theme }) => theme.colors.gray200};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font: 400 ${({ theme }) => theme.textSizes.md} 'Nunito', sans-serif;
      line-height: 160%;
  }
  ul {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }

  img{
    display: block;
    width: 100%;
  }
`
