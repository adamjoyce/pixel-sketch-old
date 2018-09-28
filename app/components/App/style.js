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
    background: black;
    height: 100%;
  }
`;

export const Button = styled.button`
  background: palevioletred;
  bottom: 0;
  height: 100px;
  position: absolute;
  width: 200px;

  :active {
    background: blue;
  }
`;
