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
      drawInterval: 200,
      fillDuration: 1000,
      strokeToFillInterval: 100
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

     // Begin animation.
     let timer = 0;
     for (let i = 0; i < paths.length; ++i) {
       if (paths[i].hasAttribute('stroke')) {
         // Incrementally draw each letter.
         window.setTimeout(() => {
           paths[i].classList.add('animate-draw');
         }, timer);
         // Increase the time interval as this path's stroke is being drawn.
         timer += drawInterval;
       }
       else {
         paths[i].classList.add('animate-draw');
       }
     }
   }

  /**
   * Renders the component.
   */
  render() {
    const {theme} = this.props;
    const {
      paths,
      drawDuration,
      drawInterval,
      fillDuration,
      strokeToFillInterval
    } = this.state;
    console.log(paths);
    return (
      <SVGWrapper>
        <svg width="687" height="139" xmlns="http://www.w3.org/2000/svg">
          <PathGroup
            ref={this.pathGroup}
            paths={paths}
            drawDuration={drawDuration}
            drawInterval={drawInterval}
            fillDuration={fillDuration}
            strokeToFillInterval={strokeToFillInterval}
            fill="none"
            fillRule="evenodd">
            {/* <!-- Origami P --> */}
            <path
              fill={theme.colors.pStroke}
              fillRule="nonzero"
              d="M46.662 2v45l45.661-22.5z"
            />
            <path
              fill={theme.colors.pFirst}
              fillRule="nonzero"
              d="M46.662 2L1 24.5 46.662 47z"
            />
            <path
              fill={theme.colors.pSecond}
              fillRule="nonzero"
              d="M92.323 24.5L46.662 47l45.661 22.5z"
            />
            <path
              fill={theme.colors.primary}
              fillRule="nonzero"
              d="M46.662 92V47l45.661 22.5z"
            />
            <path
              fill={theme.colors.pSecond}
              fillRule="nonzero"
              d="M1 24.5v45L46.662 47z"
            />
            <path
              fill={theme.colors.pStroke}
              fillRule="nonzero"
              d="M1 69.5L46.662 92V47z"
            />
            <path
              fill={theme.colors.primary}
              fillRule="nonzero"
              d="M1 69.5L46.662 92 1 114.5z"
            />
            <path
              fill={theme.colors.pFirst}
              fillRule="nonzero"
              d="M46.662 92L1 114.5 46.662 137z"
            />
            <path
              stroke={theme.colors.pStroke}
              strokeWidth="2"
              d="M92.323 69.5v-45L46.662 2 1 24.5v90L46.662 137V92z"
            />
            {/* <!-- IXEL --> */}
            <path
              stroke={theme.colors.primary}
              fill={theme.colors.primary}
              d="M110.04123,104.192 C107.481217,104.192 106.20123,103.488007 106.20123,102.08 L106.20123,38.72 C106.20123,37.311993 107.481217,36.608 110.04123,36.608 L110.80923,36.608 C113.369243,36.608 114.64923,37.311993 114.64923,38.72 L114.64923,102.08 C114.64923,103.488007 113.369243,104.192 110.80923,104.192 L110.04123,104.192 Z"
            />
            <path
              stroke={theme.colors.primary}
              fill={theme.colors.primary}
              d="M130.39323,104.192 C128.793222,104.192 127.657233,104.064001 126.98523,103.808 C126.313227,103.551999 125.97723,103.136003 125.97723,102.56 C125.97723,102.111998 126.233227,101.536004 126.74523,100.832 L148.24923,68.96 L129.04923,39.968 C128.537227,39.2639965 128.28123,38.6880022 128.28123,38.24 C128.28123,37.1519946 129.753215,36.608 132.69723,36.608 L134.04123,36.608 C135.129235,36.608 135.993227,36.703999 136.63323,36.896 C137.273233,37.088001 137.785228,37.4719971 138.16923,38.048 L153.52923,61.184 L169.36923,37.952 C169.945233,37.0559955 171.321219,36.608 173.49723,36.608 L174.07323,36.608 C175.673238,36.608 176.809227,36.7359987 177.48123,36.992 C178.153233,37.2480013 178.48923,37.6639971 178.48923,38.24 C178.48923,38.6880022 178.233232,39.2639965 177.72123,39.968 L158.52123,68.48 L180.12123,100.832 C180.633232,101.536004 180.88923,102.111998 180.88923,102.56 C180.88923,103.648005 179.417245,104.192 176.47323,104.192 L174.93723,104.192 C173.849224,104.192 172.985233,104.096001 172.34523,103.904 C171.705227,103.711999 171.193232,103.328003 170.80923,102.752 L153.14523,76.352 L135.28923,102.848 C134.713227,103.744004 133.337241,104.192 131.16123,104.192 L130.39323,104.192 Z"
            />
            <path
              stroke={theme.colors.primary}
              fill={theme.colors.primary}
              d="M194.90523,104 C193.881225,104 193.145232,103.776002 192.69723,103.328 C192.249228,102.879998 192.02523,102.144005 192.02523,101.12 L192.02523,39.68 C192.02523,38.6559949 192.249228,37.9200022 192.69723,37.472 C193.145232,37.0239978 193.881225,36.8 194.90523,36.8 L228.40923,36.8 C229.113233,36.8 229.609228,37.0239978 229.89723,37.472 C230.185231,37.9200022 230.32923,38.6559949 230.32923,39.68 L230.32923,41.216 C230.32923,42.2400051 230.185231,42.9759978 229.89723,43.424 C229.609228,43.8720022 229.113233,44.096 228.40923,44.096 L200.47323,44.096 L200.47323,65.984 L225.52923,65.984 C226.233233,65.984 226.729228,66.2079978 227.01723,66.656 C227.305231,67.1040022 227.44923,67.8399949 227.44923,68.864 L227.44923,70.4 C227.44923,71.4240051 227.305231,72.1599978 227.01723,72.608 C226.729228,73.0560022 226.233233,73.28 225.52923,73.28 L200.47323,73.28 L200.47323,96.704 L228.50523,96.704 C229.209233,96.704 229.705228,96.9279978 229.99323,97.376 C230.281231,97.8240022 230.42523,98.5599949 230.42523,99.584 L230.42523,101.12 C230.42523,102.144005 230.281231,102.879998 229.99323,103.328 C229.705228,103.776002 229.209233,104 228.50523,104 L194.90523,104 Z"
            />
            <path
              stroke={theme.colors.primary}
              fill={theme.colors.primary}
              d="M247.32123,104 C246.297225,104 245.561232,103.776002 245.11323,103.328 C244.665228,102.879998 244.44123,102.144005 244.44123,101.12 L244.44123,38.72 C244.44123,37.311993 245.721217,36.608 248.28123,36.608 L249.04923,36.608 C251.609243,36.608 252.88923,37.311993 252.88923,38.72 L252.88923,96.704 L279.28923,96.704 C279.993233,96.704 280.489228,96.9279978 280.77723,97.376 C281.065231,97.8240022 281.20923,98.5599949 281.20923,99.584 L281.20923,101.12 C281.20923,102.144005 281.065231,102.879998 280.77723,103.328 C280.489228,103.776002 279.993233,104 279.28923,104 L247.32123,104 Z"
            />


            {/* <!-- Wireframe S --> */}
            <path
              stroke={theme.colors.secondary}
              strokeWidth="2"
              d="M308 69.5v-45L353.662 2l45.661 22.5L353.662 47l45.661 22.5v45L353.662 137 308 114.5 353.662 92z"
            />
            <path
              stroke={theme.colors.secondary}
              strokeWidth="2"
              d="M353.662 137V2M399.323 24.5L308 69.5M399.323 69.5L308 114.5M308 24.5l91.323 45M308 69.5l91.323 45"
            />
            {/* <!-- KETCH --> */}
            <path
              stroke={theme.colors.secondary}
              strokeWidth="3"
              d="M417.04123,104.192 C414.481217,104.192 413.20123,103.488007 413.20123,102.08 L413.20123,38.72 C413.20123,37.311993 414.481217,36.608 417.04123,36.608 L417.80923,36.608 C420.369243,36.608 421.64923,37.311993 421.64923,38.72 L421.64923,68.096 L422.03323,68.096 L445.64923,37.952 C446.353233,37.0559955 448.081216,36.608 450.83323,36.608 L451.79323,36.608 C452.881235,36.608 453.713227,36.7199989 454.28923,36.944 C454.865233,37.1680011 455.15323,37.4719981 455.15323,37.856 C455.15323,38.4320029 454.833233,39.0719965 454.19323,39.776 L430.19323,69.728 L459.28123,101.312 C459.857233,101.952003 460.14523,102.463998 460.14523,102.848 C460.14523,103.360003 459.825233,103.711999 459.18523,103.904 C458.545227,104.096001 457.457238,104.192 455.92123,104.192 L454.76923,104.192 C453.361223,104.192 452.257234,104.128001 451.45723,104 C450.657226,103.871999 450.001232,103.520003 449.48923,102.944 L422.03323,72.032 L421.64923,72.032 L421.64923,102.08 C421.64923,103.488007 420.369243,104.192 417.80923,104.192 L417.04123,104.192 Z"
            />
            <path
              stroke={theme.colors.secondary}
              strokeWidth="3"
              d="M471.37723,104 C470.353225,104 469.617232,103.776002 469.16923,103.328 C468.721228,102.879998 468.49723,102.144005 468.49723,101.12 L468.49723,39.68 C468.49723,38.6559949 468.721228,37.9200022 469.16923,37.472 C469.617232,37.0239978 470.353225,36.8 471.37723,36.8 L504.88123,36.8 C505.585233,36.8 506.081228,37.0239978 506.36923,37.472 C506.657231,37.9200022 506.80123,38.6559949 506.80123,39.68 L506.80123,41.216 C506.80123,42.2400051 506.657231,42.9759978 506.36923,43.424 C506.081228,43.8720022 505.585233,44.096 504.88123,44.096 L476.94523,44.096 L476.94523,65.984 L502.00123,65.984 C502.705233,65.984 503.201228,66.2079978 503.48923,66.656 C503.777231,67.1040022 503.92123,67.8399949 503.92123,68.864 L503.92123,70.4 C503.92123,71.4240051 503.777231,72.1599978 503.48923,72.608 C503.201228,73.0560022 502.705233,73.28 502.00123,73.28 L476.94523,73.28 L476.94523,96.704 L504.97723,96.704 C505.681233,96.704 506.177228,96.9279978 506.46523,97.376 C506.753231,97.8240022 506.89723,98.5599949 506.89723,99.584 L506.89723,101.12 C506.89723,102.144005 506.753231,102.879998 506.46523,103.328 C506.177228,103.776002 505.681233,104 504.97723,104 L471.37723,104 Z"
            />
            <path
              stroke={theme.colors.secondary}
              strokeWidth="3"
              d="M537.71323,104.192 C535.153217,104.192 533.87323,103.488007 533.87323,102.08 L533.87323,44.096 L515.44123,44.096 C514.801227,44.096 514.321231,43.8720022 514.00123,43.424 C513.681228,42.9759978 513.52123,42.2400051 513.52123,41.216 L513.52123,39.68 C513.52123,38.6559949 513.681228,37.9200022 514.00123,37.472 C514.321231,37.0239978 514.801227,36.8 515.44123,36.8 L560.46523,36.8 C561.169233,36.8 561.665228,37.0239978 561.95323,37.472 C562.241231,37.9200022 562.38523,38.6559949 562.38523,39.68 L562.38523,41.216 C562.38523,42.2400051 562.241231,42.9759978 561.95323,43.424 C561.665228,43.8720022 561.169233,44.096 560.46523,44.096 L542.32123,44.096 L542.32123,102.08 C542.32123,103.488007 541.041243,104.192 538.48123,104.192 L537.71323,104.192 Z"
            />
            <path
              stroke={theme.colors.secondary}
              strokeWidth="3"
              d="M600.68923,104.576 C590.129177,104.576 582.337255,101.808028 577.31323,96.272 C572.289205,90.7359723 569.77723,82.1120586 569.77723,70.4 C569.77723,47.6158861 580.145126,36.224 600.88123,36.224 C604.017246,36.224 607.041215,36.5599966 609.95323,37.232 C612.865244,37.9040034 615.185221,38.7199952 616.91323,39.68 C618.449238,40.5760045 619.21723,41.4079962 619.21723,42.176 C619.21723,43.0720045 618.817234,44.223993 618.01723,45.632 C617.217226,47.040007 616.529233,47.744 615.95323,47.744 C615.761229,47.744 614.945237,47.344004 613.50523,46.544 C612.065223,45.743996 610.30524,45.040003 608.22523,44.432 C606.145219,43.823997 603.761243,43.52 601.07323,43.52 C593.329191,43.52 587.633248,45.6639786 583.98523,49.952 C580.337212,54.2400214 578.51323,61.087953 578.51323,70.496 C578.51323,79.7120461 580.321212,86.4799784 583.93723,90.8 C587.553248,95.1200216 593.137192,97.28 600.68923,97.28 C603.825246,97.28 606.513219,96.9120037 608.75323,96.176 C610.993241,95.4399963 613.201219,94.4960058 615.37723,93.344 C616.273234,92.7679971 616.881228,92.48 617.20123,92.48 C617.777233,92.48 618.481226,93.183993 619.31323,94.592 C620.145234,96.000007 620.56123,97.0239968 620.56123,97.664 C620.56123,98.6240048 619.53724,99.6799942 617.48923,100.832 C615.56922,101.920005 613.137245,102.815996 610.19323,103.52 C607.249215,104.224004 604.081247,104.576 600.68923,104.576 Z"
            />
            <path
              stroke={theme.colors.secondary}
              strokeWidth="3"
              d="M636.88123,104.192 C634.321217,104.192 633.04123,103.488007 633.04123,102.08 L633.04123,38.72 C633.04123,37.311993 634.321217,36.608 636.88123,36.608 L637.64923,36.608 C640.209243,36.608 641.48923,37.311993 641.48923,38.72 L641.48923,65.888 L676.24123,65.888 L676.24123,38.72 C676.24123,37.311993 677.521217,36.608 680.08123,36.608 L680.84923,36.608 C683.409243,36.608 684.68923,37.311993 684.68923,38.72 L684.68923,102.08 C684.68923,103.488007 683.409243,104.192 680.84923,104.192 L680.08123,104.192 C677.521217,104.192 676.24123,103.488007 676.24123,102.08 L676.24123,73.184 L641.48923,73.184 L641.48923,102.08 C641.48923,103.488007 640.209243,104.192 637.64923,104.192 L636.88123,104.192 Z"
            />
          </PathGroup>
        </svg>
      </SVGWrapper>
    );
  }
}

export default LogoSVG;
