import React from 'react';
import {ThemeProvider} from 'styled-components';

import {GlobalStyle, Button} from './style';
import {themeMain as theme} from '../../styles/themes';
import BackgroundLines from '../BackgroundLines';
import LogoSVG from '../LogoSVG';
import Overlay from '../Overlay';

/**
 * Wrapper class for the entire website.
 */
class App extends React.Component {
  /**
   * App constructor.
   * @constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: '',
      windowWidth: '',
      overlayOpen: false
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.toggleOverlayState = this.toggleOverlayState.bind(this);
  }

  /**
   * Invoked immediately after the application is loaded.
   */
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  /**
   * Invoked immediately before the application is unloaded.
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  /**
   * Sets the window's current dimensions in state.
   * @param {object} prevState - The state before the window dimensions changed.
   */
  updateWindowDimensions(prevState) {
    const newHeight = window.innerHeight;
    const newWidth = window.innerWidth;

    this.setState({
      windowHeight: newHeight,
      windowWidth: newWidth
    });
  }

  /**
   * Toggles the 'pixel' menu overlay state.
   */
  toggleOverlayState() {
    const {overlayOpen} = this.state;
    this.setState(() => ({overlayOpen: !overlayOpen}));
  }

  render() {
    const {overlayOpen} = this.state;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          {/* <BackgroundLines theme={theme} /> */}
          {/* <LogoSVG theme={theme} /> */}
          {/* <Button onClick={() => this.toggleOverlayState()} /> */}
          {/* <Overlay
            overlayOpen={overlayOpen}
            toggleOverlayState={this.toggleOverlayState}
            theme={theme}
          /> */}
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
