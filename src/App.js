import React, { Component } from 'react';
import './App.css';

import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

const [WINDOW_WIDTH, WINDOW_HEIGHT] = [window.innerWidth - 20, window.innerHeight - 110];

class App extends Component {
  componentDidMount() {
    const video = document.getElementById("video");
    const webCamPromise = navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          facingMode: "user",
          width: WINDOW_WIDTH,
          height: WINDOW_HEIGHT
        }
      })
      .then(stream => {
        video.srcObject = stream;
        return new Promise((resolve, reject) => {
          video.onloadedmetadata = () => {
            video.play();
            resolve();
          };
        });
      });
    const modelPromise = cocoSsd.load();
    Promise.all([modelPromise, webCamPromise]).then(values => {
      console.log('Model Loaded.');
      this.detectFrame(video, values[0]);
    });
  }

  detectFrame = (video, model) => {
    model.detect(video).then(predictions => {
      this.renderPredictions(predictions);
      requestAnimationFrame(() => {
        this.detectFrame(video, model);
      });
    });
  };

  renderPredictions = predictions => {
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // Font options.
    const font = "16px sans-serif";
    ctx.font = font;
    ctx.textBaseline = "top";
    predictions.forEach(prediction => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      const width = prediction.bbox[2];
      const height = prediction.bbox[3];
      // Draw the bounding box.
      ctx.strokeStyle = "#00FFFF";
      ctx.lineWidth = 4;
      ctx.strokeRect(x, y, width, height);
      // Draw the label background.
      ctx.fillStyle = "#00FFFF";
      const textWidth = ctx.measureText(prediction.class).width;
      const textHeight = parseInt(font, 10); // base 10
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
    });

    predictions.forEach(prediction => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      // Draw the text last to ensure it's on top.
      ctx.fillStyle = "#000000";
      ctx.fillText(prediction.class, x, y);
    });
  };

  render() {
    return (
      <React.Fragment>
        <h3>Tnesorflow.js 实时物体检测 Demo</h3>
        <p>完整 demo 见 <a href='https://hijiangtao.github.io/slides/s-Fliggy/1221-5min.html#/'>Slides</a>。</p>
        <small style={{
          position: 'fixed',
          right: '5px',
          cursor: 'pointer',
          bottom: '5px',
        }}><a href='https://hijiangtao.js.org/'>hijiangtao.js.org</a></small>
        <video id="video" width={WINDOW_WIDTH} height={WINDOW_HEIGHT} />
        <canvas id="canvas" width={WINDOW_WIDTH} height={WINDOW_HEIGHT} />
      </React.Fragment>
    );
  }
}

export default App;
