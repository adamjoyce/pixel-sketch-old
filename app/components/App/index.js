import React from 'react';

import {GlobalStyle, GridWrapper, EmptyCell} from './style';

/**
 * Wrapper class for the entire website.
 */
class App extends React.Component {
  /**
   * App constructor.
   */
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: '',
      windowWidth: ''
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
   */
  updateWindowDimensions(prevState) {
    const newHeight = window.innerHeight;
    const newWidth = window.innerWidth;

    this.setState({
      windowHeight: newHeight,
      windowWidth: newWidth
    });

    // Recalculate the background grid dimensions.
    this.calculateGridDimensions(newHeight, newWidth);
  }

  render() {
    const {windowHeight, windowWidth} = this.state;
    console.log({windowHeight});
    console.log({windowWidth});

    return (
      <React.Fragment>
        <div>React works! x</div>
      </React.Fragment>
    );
  }
}

export default App;
