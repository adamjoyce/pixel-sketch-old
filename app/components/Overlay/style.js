import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: 5rem;
  height: 100%;
  left: 0;
  opacity: 0.5;
  pointer-events: ${props => props.clickThroughMenu ? 'none' : 'auto'};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

${'' /* Hide all the 'pixels' to begin with. */}
  path {
    display: none;
  }
`;

export const Menu = styled.div`
  background: blue;
  bottom: 0;
  display: ${props => props.menuVisible ? 'block' : 'none'};
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  display: ${props => props.menuVisible ? 'block' : 'none'};
  font-size: 1em;
  padding: 0;
  pointer-events: auto;
  position: absolute;
  top: 0;
  right: 0;
`;
