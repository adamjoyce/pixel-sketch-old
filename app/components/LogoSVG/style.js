import styled from 'styled-components';

export const LogoWrapper = styled.div`
  .animate-draw {
    animation: draw 20s linear forwards;
    stroke-dasharray: ${props => props.pathLength};
    stroke-dashoffset: ${props => props.pathLength};
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
`;
