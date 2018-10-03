import styled, {createGlobalStyle} from 'styled-components';
import PropTypes from 'prop-types';

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
  bottom: 0;
  height: 100px;
  position: absolute;
  width: 200px;
`;
