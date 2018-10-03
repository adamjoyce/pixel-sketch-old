import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;
`;

export const MainCanvas = styled.canvas`
  background: palevioletred;
  height: 100%;
  position: absolute;
  width: 100%;
`;

export const BlurDiv = styled.div`
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;

  &.blurTop {
    background: lightgreen;
    left: 40%;
    top: -110%;
    transform: rotate(20deg);
    transform-origin: 0 100%;
  }

  &.blurBottom {
    background: lightblue;
    left: -60%;
    top: 100%;
    transform: rotate(20deg);
    transform-origin: 100% 0%;
  }

  #blurTopCanvas {
    background: red;
    left: 0%;
    position: absolute;
    top:0%;
  }

  #blurBottomCanvas {
    background: purple;
    left: 50%;
    position: absolute;
    top: 0;
  }
`;
