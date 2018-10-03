import React from 'react';

import {Canvas} from './style';

class BackgroundLines extends React.Component {
  /**
   * Background constructor.
   * @constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      ctx: '',
      lineSpacing: 30,
      lineColor: '#dcb5ff',
      lineWidth: 10,
      minLineLength: 2,
      maxLineLength: 10,
      lineLengthMultiplier: 20,
      linesX: '',
      linesY: '',
      width: '',
      height: ''
    };
    this.canvasRef = React.createRef();
    this.scaleBackground = this.scaleBackground.bind(this);
    this.updateMousePos = this.updateMousePos.bind(this);

    this.lastScrolledX = 0;
    this.lastScrolledY = 0;
  }

  /**
   * Called immediately after the component loads.
   */
  componentDidMount() {
    // Setup initial state dependant on the canvas DOM node measurements.
    this.setState({ctx: this.canvasRef.current.getContext('2d')});
    this.scaleBackground();

    // Center starting mouse position for initial background line angle.
    const canvas = this.canvasRef.current;
    this.mouseX = canvas.clientWidth * 0.5;
    this.mouseY = canvas.clientHeight * 0.5;

    // Event listener for scaling the background effect.
    window.addEventListener('resize', this.scaleBackground);
    window.addEventListener('mousemove', this.updateMousePos);
    window.addEventListener('scroll', this.updateMousePos);
  }

  /**
   * Called immediately before the component unmounts.
   */
  componentWillUnmount() {
    // Clean up the event listeners.
    window.removeEventListener('resize', this.scaleBackground);
    window.removeEventListener('mousemove', this.updateMousePos);
    window.removeEventListener('scroll', this.updateMousePos);
  }

  /**
   * Recalculates the number of rows and columns of lines after the canvas /
   * browser is resized.
   */
  scaleBackground() {
    const {lineSpacing, frameID} = this.state;
    const canvas = this.canvasRef.current;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    console.log({height});
    const linesX = Math.floor((width - (lineSpacing * 0.5)) / lineSpacing);
    const linesY = Math.floor((height - (lineSpacing * 0.5)) / lineSpacing);
    canvas.width = width;
    canvas.height = height;
    this.setState({width, height, linesX, linesY});

    // Prevents sheduling multiple animation frames.
    if (this.timerID) {
      cancelAnimationFrame(this.timerID);
      this.timerID === null;
    }

    this.draw();
  }

  /**
   * Updates the current mouse x and y coordinate location on this object.
   */
  updateMousePos(e) {
    const rect = this.canvasRef.current.getBoundingClientRect();
    if (e.type === 'mousemove') {
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    }
    else if (e.type === 'scroll') {
      const scrollX = e.target.documentElement.scrollLeft;
      const scrollY = e.target.documentElement.scrollTop;

      // Horizontal scroll.
      if (this.lastScrolledX != scrollX) {
        this.mouseX -= this.lastScrolledX;
        this.lastScrolledX = scrollX;
        this.mouseX += this.lastScrolledX;
      }

      // Vertical scroll.
      if (this.lastScrolledY != scrollY) {
        this.mouseY -= this.lastScrolledY;
        this.lastScrolledY = scrollY;
        this.mouseY += this.lastScrolledY;
      }
    }

    console.log(this.lastScrolledY);
    console.log(scrollX);
    console.log('MouseX: ' + this.mouseX);
    console.log('MouseY: ' + this.mouseY);
  }

  draw() {
    this.timerID = requestAnimationFrame(() => this.draw());

    // Return is no mouse position is set / present.
    if (this.mouseX == void(0) || this.mouseY == void(0)) {
      return;
    }

    const {
      ctx,
      lineSpacing,
      lineColor,
      lineWidth,
      minLineLength,
      maxLineLength,
      lineLengthMultiplier,
      linesX,
      linesY,
      width,
      height} = this.state;
    const mouseX = this.mouseX;
    const mouseY = this.mouseY;
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;

    // Construct the grid.
    for (let x = 0; x < linesX; ++x) {
      for (let y = 0; y < linesY; ++y) {
        // Caculate screen and line varibles before drawing.
        let screenX = (x * lineSpacing) + lineSpacing;
        let screenY = (y * lineSpacing) + lineSpacing;
        let angle = Math.atan2(screenY - mouseY, screenX - mouseX);
        let distance = Math.sqrt((mouseX - screenX) * (mouseX - screenX) + (mouseY - screenY) * (mouseY - screenY));
        let length = Math.min(Math.max(minLineLength, distance / ((width + height) / 2) * lineLengthMultiplier), maxLineLength);
        // let length = Math.min(Math.max(minLineLength, distance / (((width + height) * 0.5) * lineLengthMultiplier)), maxLineLength);

        // Begin the path and move to the line's starting screen position.
        ctx.beginPath();
        ctx.moveTo(screenX, screenY);

        // Connect the line.
        ctx.lineTo(screenX + length * Math.cos(angle), screenY + length * Math.sin(angle));

        // Draw the line.
        ctx.stroke();
      }
    }
  }

  /**
   * Renders the compomnent.
   */
  render() {
    const {theme} = this.props;
    return (
      <Canvas
        ref={this.canvasRef}
        theme={theme}
      />
    );
  }
}

export default BackgroundLines;
