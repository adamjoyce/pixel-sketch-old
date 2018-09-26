import styled from 'styled-components';

import {calculateFillDelay} from '../../utils/helpers';

export const SVGWrapper = styled.svg`
  display: block;
`;

export const PathGroup = styled.g`
  path {
    fill-opacity: 0;
  }

  ${'' /* Aligns fill animations and setups stroke lengths. */}
  path:nth-of-type(1) {
    animation-delay: 0ms, ${props =>
      calculateFillDelay(
        0, props.drawInterval, props.drawDuration, props.paths.length
      )}ms;
    stroke-dasharray: ${props =>
      props.paths.length > 0 ? props.paths[0].length : null};
    stroke-dashoffset: ${props =>
      props.paths.length > 0 ? props.paths[0].length : null};
  }

  path:nth-of-type(2) {
    animation-delay: 0ms, ${props =>
      calculateFillDelay(
        1, props.drawInterval, props.drawDuration, props.paths.length
      )}ms;
    stroke-dasharray: ${props =>
      props.paths.length > 0 ? props.paths[1].length : null};
    stroke-dashoffset: ${props =>
      props.paths.length > 0 ? props.paths[1].length : null};
  }

  path:nth-of-type(3) {
    animation-delay: 0ms, ${props =>
      calculateFillDelay(
        2, props.drawInterval, props.drawDuration, props.paths.length
      )}ms;
    stroke-dasharray: ${props =>
      props.paths.length > 0 ? props.paths[2].length : null};
    stroke-dashoffset: ${props =>
      props.paths.length > 0 ? props.paths[2].length : null};
  }

  path:nth-of-type(4) {
    animation-delay: 0ms, ${props =>
      calculateFillDelay(
        3, props.drawInterval, props.drawDuration, props.paths.length
      )}ms;
    stroke-dasharray: ${props =>
      props.paths.length > 0 ? props.paths[3].length : null};
    stroke-dashoffset: ${props =>
      props.paths.length > 0 ? props.paths[3].length : null};
  }

  .animate-draw {
    animation-name: DrawStroke, FillIn;
    animation-duration: ${props => props.drawDuration}ms,
                        ${props => props.fillDuration}ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
  }

  @keyframes DrawStroke {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes FillIn {
    to {
      fill-opacity: 1;
    }
  }
`;
