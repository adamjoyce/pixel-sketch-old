import React from 'react';

import {Wrapper, MainCanvas, BlurDiv} from './style';

class BackgroundParticles extends React.Component {
  /**
   * BackgroundParticles constructor.
   * @constructor
   */
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * Renders the component.
   */
  render() {
    return (
      <Wrapper>
        <MainCanvas></MainCanvas>
        <BlurDiv className="blurTop">
          <canvas id="blurTopCanvas"></canvas>
        </BlurDiv>
        <BlurDiv className="blurBottom">
          <canvas id="blurBottomCanvas"></canvas>
        </BlurDiv>
      </Wrapper>
    );
  }
}

export default BackgroundParticles;
