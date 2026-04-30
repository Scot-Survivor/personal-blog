import React, { useState } from 'react';
import styles from './styles.module.css';

export default function BetterPSOViewer({ showButton = true }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const iframeHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { margin: 0; padding: 0; }
        #canvas {
          width: 100%;
          height: 100vh;
          display: block;
        }
      </style>
    </head>
    <body>
      <canvas id="canvas" oncontextmenu="event.preventDefault()"></canvas>
      <script>
        var Module = {
          canvas: document.getElementById('canvas'),
          locateFile: function(path) {
            return 'https://scot-survivor.github.io/Better-PSO/' + path;
          }
        };
      </script>
      <script src="https://scot-survivor.github.io/Better-PSO/Better_PSO.js"><\/script>
    </body>
    </html>
  `;

  const handleClose = () => setIsFullscreen(false);

  if (isFullscreen) {
    return (
      <div className={styles.fullscreenContainer}>
        <button className={styles.closeButton} onClick={handleClose}>
          ✕ Close
        </button>
        <iframe
          srcDoc={iframeHtml}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block'
          }}
          title="PSO Visualizer"
        />
      </div>
    );
  }

  return showButton ? (
    <button onClick={() => setIsFullscreen(true)} className={styles.launchButton}>
      Launch PSO Visualizer
    </button>
  ) : null;
}