//Copyright (c) 2016-2017 Shafeen Tejani. Released under GPLv3.
import React from "react";
import 'tachyons';
import Axios from "axios";

function rescaleImagePixels(pixelIntensities, toSize) {
  const fromSize = parseInt(Math.sqrt(pixelIntensities.length));
  const scale = fromSize / toSize;

  const rescaledPixelIntensities = Array(toSize**2);

  for (let i=0; i < rescaledPixelIntensities.length; i++) {
    let xStart = (i%toSize)*scale;
    let xEnd = xStart + scale;
    let yStart = parseInt(i/toSize) * scale;
    let yEnd = yStart + scale;

    let pixelSum = 0;
    for (let x=xStart; x < xEnd; x++) {
      for (let y=yStart; y < yEnd; y++) {
        pixelSum += pixelIntensities[x + y*fromSize]
      }
    }
    rescaledPixelIntensities[i] = pixelSum / (255.0 * scale**2);
  }
  return rescaledPixelIntensities;
}

class InputCanvas extends React.Component {

  componentDidMount() {
    this.canvas = this.refs.inputCanvas;
    this.ctx = this.canvas.getContext('2d');
    console.log(this.state.imageData);
  }

  constructor(props) {
    super(props);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.getCursorPosition = this.getCursorPosition.bind(this);
    this.drawLine = this.drawLine.bind(this);
    this.state = {
      imageData: new Array,
      currentPosition: null,
      drawing: false
    };
  }

  onMouseDown(e) {
    this.setState({drawing: true});
    this.setState({currentPosition: this.getCursorPosition(e)});
  }

  onMouseMove(e) {
    if (!this.state.drawing) return;

    const previousPosition = this.state.currentPosition;
    const currentPosition = this.getCursorPosition(e);

    this.drawLine(previousPosition, currentPosition);

    this.setState({imageData: this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height).data});
    this.setState({currentPosition: currentPosition});
  }

  onMouseUp(e) {
    if (this.state.drawing) {
      this.setState({drawing: false});
    }
  }

  drawLine(start, end) {
    this.ctx.save();
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    this.ctx.beginPath();
    this.ctx.lineWidth = 16;
    this.ctx.moveTo(start.x, start.y);
    this.ctx.lineTo(end.x, end.y);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.restore();
  }

  getCursorPosition(e) {
    let xPos, yPos;
    if (e.touches !== undefined) {
      xPos = e.touches[0].clientX;
      yPos = e.touches[0].clientY;
    } else {
      xPos = e.clientX;
      yPos = e.clientY;
    }
    const {top, left} = this.canvas.getBoundingClientRect();
    return {
      x: xPos - left,
      y: yPos - top
    };
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  postData = (url = ``, data = {}) => {
  // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses response to JSON
}

predict() {
  console.log(this.state.imageData);
  console.log(rescaleImagePixels(this.state.imageData, 28));
  this.postData(`/predict`, rescaleImagePixels(this.state.imageData, 28))
.then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
.catch(error => console.error(error));
}
  //   Axios.post(
  //       '/predict', JSON.stringify(toPixelIntensities(this.state.imageData))
  //   ).then(function (response) {
  //       console.log(response);
  //   }).catch(function (error) {
  //       console.log(error);
  //   });
  // }

  render() {
    return <div className="input-canvas-container" style = {{marginLeft: 200}}>
            <div style={{marginBottom: "10px"}}>
              <i className="fa fa-pencil" aria-hidden="true"></i>
              <span style={{marginLeft: "0.5em"}}>Draw a digit</span>
            </div>
            <canvas id="input-canvas"
                    className="input-canvas"
                    ref="inputCanvas"
                    width={140} height={140}
                    onMouseDown={this.onMouseDown}
                    onMouseMove={this.onMouseMove}
                    onMouseOut={this.onMouseUp}
                    onMouseUp={this.onMouseUp}
                    style = {{backgroundColor : 'white', borderRadius: 20}}
                    />
              <button className="clear-canvas" onClick={() => this.clear()}>
                <span style={{marginLeft: "0.5em"}}>Clear</span>
              </button>

              <button className="predict-canvas" onClick={() => this.predict()}>
                <span style={{marginLeft: "0.5em"}}>Predict</span>
              </button>
          </div>
  }
};

export default InputCanvas;
