import styled from 'styled-components';

export const Canvas = styled.canvas`
  background: ${props => props.theme.colors.backgroundPrimary};
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: -1;
`;