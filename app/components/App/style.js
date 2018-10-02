import styled, {createGlobalStyle} from 'styled-components';
import PropTypes from 'prop-types';

export const GlobalStyle = createGlobalStyle`
  html {
    min-height: 100%;
    position: relative;
  }

  body {
    min-height: 100%;
  }

  #app {
    height: 100%;
  }
`;

GlobalStyle.propTypes = {
  theme: PropTypes.object.isRequired
}

export const Button = styled.button`
  background: palevioletred;
  bottom: 0;
  height: 100px;
  position: absolute;
  width: 200px;
`;
