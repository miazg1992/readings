import React, { useState } from 'react';
import Canvas from 'components/organisms/Canvas/Canvas';

const Animation = (props) => {
  const [ctx, setCtx] = useState(null);
  const [canvasWidth, setCanvasWidth] = useState(null);
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
  const letters = chars.split('');

  // Font-size remains constant, so similarly move outside draw
  const establishContext = (context) => {
    setCtx(context);
  };

  const establishCanvasWidth = (width) => {
    setCanvasWidth(width);
  };

  const fontSize = 10;
  // Setting up the columns
  console.log(canvasWidth, 'canvasWidth');
  const columns = canvasWidth ? canvasWidth / fontSize : 10;
  // Setting up the drops
  const drops = [];
  for (let i = 0; i < columns; i++) {
    console.log(columns);
    drops[i] = 1;
  }

  const draw = () => {
    if (ctx) {
      ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > ctx.canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }
  };

  return (
    <Canvas
      draw={draw}
      establishContext={establishContext}
      establishCanvasWidth={establishCanvasWidth}
    />
  );
};

export default Animation;
