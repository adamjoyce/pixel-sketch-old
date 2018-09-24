import styled, {createGlobalStyle} from 'styled-components';

// import SVG from '../../static/images/scribble.svg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    height: 100%;
  }

  #app {
    height: 100%;
  }
`;

export const Button = styled.button`
  background: palevioletred;
  height: 100px;
  width: 200px;

  :active {
    background: blue;
  }
`;
