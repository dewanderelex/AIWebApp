import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';

import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import CanvasHandling from './Components/CanvasHandling/CanvasHandling';

class App extends Component {
  render() {
    // const properties = {
    //   particles: {
    //     number:{
    //       value: 40,
    //       density: {
    //         enable: true,
    //         value_area: 800
    //       }
    //     },
    //     color: {
    //       value : '#ffffff'
    //     },
    //     line_linked: {
    //       shadow: {
    //         enable: true,
    //         color: "#ffffff",
    //         blur: 5
    //       }
    //     }
    //   },
    //   interactivity: {
    //     onhover: {
    //       enable: true,
    //       mode: 'repulse'
    //     }
    //   }
    // }

    // const properties2 = ParticlesProps.interactivity;

    return (
      <div className="App">
        {/* <Particles className = "particles" params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		}
            	}}
              style={{
                width: '100%',
              }}/> */}
        <Navigation />
        <Logo />
        <CanvasHandling />

        {/* 
        <PredictArea />
        <AuthorArea /> */}
      </div>
    );
  }
}

export default App;
