import styled from 'styled-components';
import PropTypes from 'prop-types';

import {calculateFillDelay} from '../../utils/helpers';

export const SVGWrapper = styled.svg`
  display: block;
`;

export const PathGroup = styled.g`
  path {
    fill-opacity: 0;
  }

  ${'' /* Aligns fill animations and setups stroke lengths. */}
  ${'' /* Origami P triangles. */}
  path:nth-of-type(1) {
    ${props => console.log(props.paths.length)}
    animation-delay: 0ms, ${props =>
      calculateFillDelay(
        8, props.drawInterval, props.drawDuration, props.paths.length, props.strokeToFillInterval
      )}ms;
  }

  path:nth-of-type(2) {
    animation-delay: 0ms, ${props =>
      calculateFillDelay(
        8, props.drawInterval, props.drawDuration, props.paths.length, props.strokeToFillInterval
      )}ms;
  }

  path:nth-of-type(3) {
    animation-delay: 0ms, ${props =>
      calculateFillDelay(
        8, props.drawInterval, props.drawDuration, props.paths.length, props.strokeToFillInterval
      )}ms;
  }

  path:nth-of-type(4) {
    animation-delay: 0ms, ${props =>
      calculateFillDelay(
        8, props.drawInterval, props.drawDuration, props.paths.length, props.strokeToFillInterval
      )}ms;
  }

  path:nth-of-type(5) {
    animation-delay: 0ms, ${props =>
      calculateFillDelay(
        8, props.drawInterval, props.drawDuration, props.paths.length, props.strokeToFillInterval
      )}ms;
  }

  path:nth-of-type(6) {
    animation-delay: 0ms, ${props =>
      calculateFillDelay(
        8, props.drawInterval, props.drawDuration, props.paths.length, props.strokeToFillInterval
      )}ms;
  }

  path:nth-of-type(7) {
    animation-delay: 0ms, ${props =>
      calculateFillDelay(
        8, props.drawInterval, props.drawDuration, props.paths.length, props.strokeToFillInterval
      )}ms;
  }

  path:nth-of-type(8) {
    animation-delay: 0ms, ${props =>
      calculateFillDelay(
        8, props.drawInterval, props.drawDuration, props.paths.length, props.strokeToFillInterval
      )}ms;
  }
  ${'' /* Origami P triangles end. */}

  ${'' /* Origami P outer stroke. */}
  path:nth-of-type(9) {
    animation-delay: 0ms;
    stroke-dasharray: ${props =>
      props.paths.length > 0 ? props.paths[8].length : null};
    stroke-dashoffset: ${props =>
      props.paths.length > 0 ? props.paths[8].length : null};
  }

  ${'' /* IXEL */}
  path:nth-of-type(10) {
    animation-delay: 0ms, ${props =>
      calculateFillDelay(
        9, props.drawInterval, props.drawDuration, props.paths.length, props.strokeToFillInterval
      )}ms;
    stroke-dasharray: ${props =>
      props.paths.length > 0 ? props.paths[9].length : null};
    stroke-dashoffset: ${props =>
      props.paths.length > 0 ? props.paths[9].length : null};
  }

  path:nth-of-type(11) {
    animation-delay: 0ms, ${props =>
      calculateFillDelay(
        10, props.drawInterval, props.drawDuration, props.paths.length, props.strokeToFillInterval
      )}ms;
    stroke-dasharray: ${props =>
      props.paths.length > 0 ? props.paths[10].length : null};
    stroke-dashoffset: ${props =>
      props.paths.length > 0 ? props.paths[10].length : null};
  }

  path:nth-of-type(12) {
    animation-delay: 0ms, ${props =>
      calculateFillDelay(
        11, props.drawInterval, props.drawDuration, props.paths.length, props.strokeToFillInterval
      )}ms;
    stroke-dasharray: ${props =>
      props.paths.length > 0 ? props.paths[11].length : null};
    stroke-dashoffset: ${props =>
      props.paths.length > 0 ? props.paths[11].length : null};
  }

  path:nth-of-type(13) {
    animation-delay: 0ms, ${props =>
      calculateFillDelay(
        12, props.drawInterval, props.drawDuration, props.paths.length, props.strokeToFillInterval
      )}ms;
    stroke-dasharray: ${props =>
      props.paths.length > 0 ? props.paths[12].length : null};
    stroke-dashoffset: ${props =>
      props.paths.length > 0 ? props.paths[12].length : null};
  }
  ${'' /* IXEL ends. */}

  ${'' /* Wireframe S outer stroke. */}
  path:nth-of-type(14) {
    animation-delay: 0ms;
    stroke-dasharray: ${props =>
      props.paths.length > 0 ? props.paths[13].length : null};
    stroke-dashoffset: ${props =>
      props.paths.length > 0 ? props.paths[13].length : null};
  }

  ${'' /* Wireframe S inside strokes. */}
  path:nth-of-type(15) {
    animation-delay: ${props =>
      calculateFillDelay(
        14, props.drawInterval, props.drawDuration, props.paths.length, props.strokeToFillInterval
      )}ms;
    ${'' /* Make the animation duration in time with the fill. */}
    animation-duration: ${props => props.fillDuration}ms;
    stroke-dasharray: ${props =>
      props.paths.length > 0 ? props.paths[14].length : null};
    stroke-dashoffset: ${props =>
      props.paths.length > 0 ? props.paths[14].length : null};
  }

  ${'' /* KETCH */}
  path:nth-of-type(16) {
    animation-delay: 0ms;
    stroke-dasharray: ${props =>
      props.paths.length > 0 ? props.paths[15].length : null};
    stroke-dashoffset: ${props =>
      props.paths.length > 0 ? props.paths[15].length : null};
  }

  path:nth-of-type(17) {
    animation-delay: 0ms;
    stroke-dasharray: ${props =>
      props.paths.length > 0 ? props.paths[16].length : null};
    stroke-dashoffset: ${props =>
      props.paths.length > 0 ? props.paths[16].length : null};
  }

  path:nth-of-type(18) {
    animation-delay: 0ms;
    stroke-dasharray: ${props =>
      props.paths.length > 0 ? props.paths[17].length : null};
    stroke-dashoffset: ${props =>
      props.paths.length > 0 ? props.paths[17].length : null};
  }

  path:nth-of-type(19) {
    animation-delay: 0ms;
    stroke-dasharray: ${props =>
      props.paths.length > 0 ? props.paths[18].length : null};
    stroke-dashoffset: ${props =>
      props.paths.length > 0 ? props.paths[18].length : null};
  }

  path:nth-of-type(20) {
    animation-delay: 0ms;
    stroke-dasharray: ${props =>
      props.paths.length > 0 ? props.paths[19].length : null};
    stroke-dashoffset: ${props =>
      props.paths.length > 0 ? props.paths[19].length : null};
  }
  ${'' /* KETCH ends. */}

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

  @keyframes FadeStroke {
    to {
      stroke-opacity: 0;
    }
  }

  @keyframes FillIn {
    to {
      fill-opacity: 1;
    }
  }
`;

PathGroup.propTypes = {
  paths: PropTypes.array,
  drawDuration: PropTypes.number.isRequired,
  drawInterval: PropTypes.number.isRequired,
  fillDuration: PropTypes.number.isRequired,
  strokeToFillInterval: PropTypes.number.isRequired
}
