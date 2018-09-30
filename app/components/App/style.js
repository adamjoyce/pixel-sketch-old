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
    background: ${props => props.theme.colors.backgroundPrimary};
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
