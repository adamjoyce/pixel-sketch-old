import React from 'react';

import {SVGWrapper, PathGroup} from './style';

/**
 * Handles the animation and drawing of Pixel Sketch's main text logo.
 */
class LogoSVG extends React.Component {
  /**
   * LogoSVG constructor.
   */
  constructor(props) {
    super(props);
    this.state = {
      paths: [],
      // Draw animation variables (ms).
      drawDuration: 1000,
      drawInterval: 300,
      fillDuration: 1000
    }
    this.pathGroup = React.createRef();
  }

  /**
   * Invoked immediately after the component loads.
   */
   componentDidMount() {
     const {drawInterval} = this.state;
     const paths = Array.from(this.pathGroup.current.childNodes);

     // Calculate the path lengths for each path.
     let calculatedPaths = [];
     for (let i = 0; i < paths.length; ++i) {
       const calculatedPath = {
         path: paths[i],
         length: paths[i].getTotalLength()
       };
       calculatedPaths.push(calculatedPath);
     }

     this.setState({paths: calculatedPaths});

     console.log({paths});
     // Begin animation.
     let timer = 0;
     for (let i = 0; i < paths.length; ++i) {
       // Incrementally draw each letter.
       window.setTimeout(() => {
         paths[i].classList.add('animate-draw');
       }, timer);
       timer += drawInterval;
     }
   }

  /**
   * Renders the component.
   */
  render() {
    const {paths, drawDuration, drawInterval, fillDuration} = this.state;
    return (
      <SVGWrapper width="176" height="69" xmlns="http://www.w3.org/2000/svg">
        <PathGroup
          ref={this.pathGroup}
          paths={paths}
          drawDuration={drawDuration}
          drawInterval={drawInterval}
          fillDuration={fillDuration}
          fill="#8ffffd"
          fillRule="evenodd">
          <path
            d="
            M4.04122987,68.192
            C1.48121707,68.192 0.201229868,67.488007 0.201229868,66.08
            L0.201229868,2.72
            C0.201229868,1.31199296 1.48121707,0.608 4.04122987,0.608
            L4.80922987,0.608
            C7.36924267,0.608 8.64922987,1.31199296 8.64922987,2.72
            L8.64922987,66.08
            C8.64922987,67.488007 7.36924267,68.192 4.80922987,68.192
            L4.04122987,68.192 Z"
            stroke="#8ffffd"
          />
          <path
            d="
            M24.3932299,68.192
            C22.7932219,68.192 21.6572332,68.0640013 20.9852299,67.808
            C20.3132265,67.5519987 19.9772299,67.1360029 19.9772299,66.56
            C19.9772299,66.1119978 20.2332273,65.5360035 20.7452299,64.832
            L42.2492299,32.96
            L23.0492299,3.968
            C22.5372273,3.26399648 22.2812299,2.68800224 22.2812299,2.24
            C22.2812299,1.15199456 23.7532151,0.608 26.6972299,0.608
            L28.0412299,0.608
            C29.1292353,0.608 29.9932267,0.70399904 30.6332299,0.896
            C31.2732331,1.08800096 31.7852279,1.47199712 32.1692299,2.048
            L47.5292299,25.184
            L63.3692299,1.952
            C63.9452327,1.05599552 65.321219,0.608 67.4972299,0.608
            L68.0732299,0.608
            C69.6732379,0.608 70.8092265,0.73599872 71.4812299,0.992
            C72.1532332,1.24800128 72.4892299,1.66399712 72.4892299,2.24
            C72.4892299,2.68800224 72.2332324,3.26399648 71.7212299,3.968
            L52.5212299,32.48
            L74.1212299,64.832
            C74.6332324,65.5360035 74.8892299,66.1119978 74.8892299,66.56
            C74.8892299,67.6480054 73.4172446,68.192 70.4732299,68.192
            L68.9372299,68.192
            C67.8492244,68.192 66.9852331,68.096001 66.3452299,67.904
            C65.7052267,67.711999 65.1932318,67.3280029 64.8092299,66.752
            L47.1452299,40.352
            L29.2892299,66.848
            C28.713227,67.7440045 27.3372407,68.192 25.1612299,68.192
            L24.3932299,68.192 Z"
            stroke="#8ffffd"
          />
          <path
            d="
            M88.9052299,68
            C87.8812247,68 87.1452321,67.7760022 86.6972299,67.328
            C86.2492276,66.8799978 86.0252299,66.1440051 86.0252299,65.12
            L86.0252299,3.68
            C86.0252299,2.65599488 86.2492276,1.92000224 86.6972299,1.472
            C87.1452321,1.02399776 87.8812247,0.8 88.9052299,0.8
            L122.40923,0.8
            C123.113233,0.8 123.609228,1.02399776 123.89723,1.472
            C124.185231,1.92000224 124.32923,2.65599488 124.32923,3.68
            L124.32923,5.216
            C124.32923,6.24000512 124.185231,6.97599776 123.89723,7.424
            C123.609228,7.87200224 123.113233,8.096 122.40923,8.096
            L94.4732299,8.096
            L94.4732299,29.984
            L119.52923,29.984
            C120.233233,29.984 120.729228,30.2079978 121.01723,30.656
            C121.305231,31.1040022 121.44923,31.8399949 121.44923,32.864
            L121.44923,34.4
            C121.44923,35.4240051 121.305231,36.1599978 121.01723,36.608
            C120.729228,37.0560022 120.233233,37.28 119.52923,37.28
            L94.4732299,37.28
            L94.4732299,60.704
            L122.50523,60.704
            C123.209233,60.704 123.705228,60.9279978 123.99323,61.376
            C124.281231,61.8240022 124.42523,62.5599949 124.42523,63.584
            L124.42523,65.12
            C124.42523,66.1440051 124.281231,66.8799978 123.99323,67.328
            C123.705228,67.7760022 123.209233,68 122.50523,68
            L88.9052299,68 Z"
            stroke="#8ffffd"
          />
          <path
            d="
            M141.32123,68
            C140.297225,68 139.561232,67.7760022 139.11323,67.328
            C138.665228,66.8799978 138.44123,66.1440051 138.44123,65.12
            L138.44123,2.72
            C138.44123,1.31199296 139.721217,0.608 142.28123,0.608
            L143.04923,0.608
            C145.609243,0.608 146.88923,1.31199296 146.88923,2.72
            L146.88923,60.704
            L173.28923,60.704
            C173.993233,60.704 174.489228,60.9279978 174.77723,61.376
            C175.065231,61.8240022 175.20923,62.5599949 175.20923,63.584
            L175.20923,65.12
            C175.20923,66.1440051 175.065231,66.8799978 174.77723,67.328
            C174.489228,67.7760022 173.993233,68 173.28923,68
            L141.32123,68 Z"
            stroke="#8ffffd"
          />
        </PathGroup>
      </SVGWrapper>
    );
  }
}

export default LogoSVG;
