import React from 'react';
import './Logo.css';
import Ava from './res/ava.jpg';
import Tilt from 'react-tilt';

const options = {
    reverse:        true,  // reverse the tilt direction
    max:            60,     // max tilt rotation (degrees)
    perspective:    700,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.5,      // 2 = 200%, 1.5 = 150%, etc..
    speed:          100,    // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,   // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


const Logo = () => {
    return (
        <div className = "main" style = {{display: 'flex', justifyContent: 'flex-start'}}>
            <Tilt className="Tilt" options={options} style={{ height: 100, width: 100 }} >
                <img src = {Ava} alt="Avatar" className = "Tilt-inner" />
            </Tilt>
        </div>
    );
};

export default Logo;