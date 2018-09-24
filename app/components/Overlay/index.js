import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper, Menu, CloseButton} from './style';
import {shuffle} from '../../utils/helpers';

/**
 * Tiled menu overlay.
 */
class Overlay extends React.Component {
  /**
   * Overlay constructor.
   * @constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      paths: [],
      animationInterval: 20,
      clickThroughMenu: true,
      menuVisible: false
    }
    this.pathGroup = React.createRef();
    this.toggleMenuVisibility = this.toggleMenuVisibility.bind(this);
  }

  /**
   * Invoked immdeiately after the component loads.
   */
  componentDidMount() {
    // SVG overlay paths needed for 'pixel' animation when toggled.
    let paths = Array.from(this.pathGroup.current.childNodes);
    this.setState({paths});
  }

  /**
   * Invoked immediately after the component updates.
   * @param {object} prevProps - The props before the update.
   */
  componentDidUpdate(prevProps) {
    const {overlayOpen} = this.props;
    if (overlayOpen !== prevProps.overlayOpen) {
      // The overlay has been toggled, shuffle the array, and start the
      // animation.
      const {paths} = this.state;
      shuffle(paths);
      this.togglePixelOverlay(overlayOpen);
    }
  }

  /**
   * Handles the opening and closing of the 'pixel' menu overlay.
   */
  togglePixelOverlay(isOpening) {
    const {paths, animationInterval, clickThroughMenu} = this.state;

    // Opening / Closing 'pixel' animation.
    let timer = 0;
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      window.setTimeout(() => {
        // Display / hide this pixel.
        (isOpening
          ? path.style.display = "block"
          : path.style.display = "none");

        // After the last pixel has opened / closed.
        if (i === paths.length - 1) {
          if (isOpening) {
            // Display menu and close button.
            this.toggleMenuVisibility();
          }
          else {
            // Re-enable clicking after the menu has closed.
            this.setState(() => ({clickThroughMenu: !clickThroughMenu}));
          }
        }
      }, timer);
      timer += animationInterval;
    }

    if (isOpening) {
      // Stop users from clicking through the menu immediately.
      this.setState(() => ({clickThroughMenu: !clickThroughMenu}));
    } else {
      // Immediately hide the menu and close button.
      this.toggleMenuVisibility();
    }
  }

  /**
   * Shows / hides the menu within the pixel overlay.
   */
  toggleMenuVisibility() {
    const {menuVisible} = this.state;
    this.setState(() => ({menuVisible: !menuVisible}));
  }

  /**
   * Renders the component.
   */
   render() {
     const {overlayOpen, toggleOverlayState} = this.props;
     const {clickThroughMenu, menuVisible} = this.state;
     console.log({overlayOpen});
     console.log({toggleOverlayState});
     console.log({clickThroughMenu});

     return (
       <Wrapper clickThroughMenu={clickThroughMenu}>
         <svg
           width="100%"
           height="100%"
           viewBox="0 0 1440 1024"
           preserveAspectRatio="none"
           xmlns="http://www.w3.org/2000/svg">
           <g ref={this.pathGroup} fill="green" fillRule="evenodd">
             <path d="M-1-1h182v207H-1z"/>
             <path d="M-1 205h182v207H-1z"/>
             <path d="M-1 411h182v207H-1z"/>
             <path d="M-1 617h182v207H-1z"/>
             <path d="M-1 823h182v207H-1z"/>
             <path d="M180-1h182v207H180z"/>
             <path d="M180 205h182v207H180z"/>
             <path d="M180 411h182v207H180z"/>
             <path d="M180 617h182v207H180z"/>
             <path d="M180 823h182v207H180z"/>
             <path d="M361-1h182v207H361z"/>
             <path d="M361 205h182v207H361z"/>
             <path d="M361 411h182v207H361z"/>
             <path d="M361 617h182v207H361z"/>
             <path d="M361 823h182v207H361z"/>
             <path d="M542-1h182v207H542z"/>
             <path d="M542 205h182v207H542z"/>
             <path d="M542 411h182v207H542z"/>
             <path d="M542 617h182v207H542z"/>
             <path d="M542 823h182v207H542z"/>
             <path d="M723-1h182v207H723z"/>
             <path d="M723 205h182v207H723z"/>
             <path d="M723 411h182v207H723z"/>
             <path d="M723 617h182v207H723z"/>
             <path d="M723 823h182v207H723z"/>
             <path d="M904-1h182v207H904z"/>
             <path d="M904 205h182v207H904z"/>
             <path d="M904 411h182v207H904z"/>
             <path d="M904 617h182v207H904z"/>
             <path d="M904 823h182v207H904z"/>
             <path d="M1085-1h182v207h-182z"/>
             <path d="M1085 205h182v207h-182z"/>
             <path d="M1085 411h182v207h-182z"/>
             <path d="M1085 617h182v207h-182z"/>
             <path d="M1085 823h182v207h-182z"/>
             <path d="M1266-1h182v207h-182z"/>
             <path d="M1266 205h182v207h-182z"/>
             <path d="M1266 411h182v207h-182z"/>
             <path d="M1266 617h182v207h-182z"/>
             <path d="M1266 823h182v207h-182z"/>
           </g>
         </svg>
         <Menu menuVisible={menuVisible} />
         <CloseButton
           menuVisible={menuVisible}
           onClick={() => toggleOverlayState()}>
           X
         </CloseButton>
       </Wrapper>
     );
   }
}

Overlay.propTypes = {
  overlayOpen: PropTypes.bool.isRequired,
  toggleOverlayState: PropTypes.func.isRequired
}

export default Overlay;
