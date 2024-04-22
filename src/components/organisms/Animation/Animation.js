import React, { useEffect, useState } from 'react';
import Canvas from 'components/organisms/Canvas/Canvas';

let hue = 0;

const Animation = (props) => {
  const [ctx, setCtx] = useState(null);
  const [canvasWidth, setCanvasWidth] = useState(null);
  const [canvasHeight, setCanvasHeight] = useState(null);
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
  const letters = chars.split('');
  const [particles, setParticles] = useState([]);
  let hue = 1;

  // Font-size remains constant, so similarly move outside draw
  const establishContext = (ctx) => {
    setCtx(ctx);
  };

  const establishCanvasWidth = (width) => {
    setCanvasWidth(width);
  };

  const establishCanvasHeight = (height) => {
    setCanvasHeight(height);
  };

  const fontSize = 10;
  // Setting up the columns
  const columns = canvasWidth ? canvasWidth / fontSize : 10;
  // Setting up the drops
  const drops = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  const updateParticle = () => {
    const updatedParticles = particles.map((particle) => {
      const { x, y, speedX, speedY } = particle;
      let { directionX, directionY } = particle;
      let dx = x + speedX * hue * directionX;
      let dy = y + speedY * hue;
      if (dx < 0 || dx > establishCanvasWidth) {
        dx = 0;
        directionX = !directionX;
        dx -= speedX * hue * directionX;
      }

      const updatedParticle = { ...particle, x: dx, y: dy };
      return updatedParticle;
    });
    // setParticles(updatedParticles);
    return updatedParticles;
  };

  // const updateParticle = (particle) => {
  //   const { x, y, speedX, speedY } = particle;
  //   const dx = x + speedX;
  //   const dy = y + speedY;

  //   const updatedParticle = { ...particle, x: dx, y: dy };
  //   return updatedParticle;
  // };

  const generateParticle = () => {
    const newParticle = {
      x: Math.random() * ctx.canvas.width,
      y: Math.random() * ctx.canvas.height,
      size: Math.random() * 10 + 3,
      color: `hsl(${hue}, 100%, 50%)`,
      speedX: Math.random() * 3 - 1.5,
      speedY: Math.random() * 3 - 1.5,
      directionX: Math.random() > 0.5 ? 1 : -1,
      directionY: Math.random() > 0.5 ? 1 : -1,
    };
    // hue = 2;
    console.log(newParticle);
    return newParticle;
  };

  // const generateParticle = (x, y) => {
  //   console.log('generowanie', x, y);
  //   let generatedParticles = [];
  //   for (let i = 0; i < 10; i++) {
  //     console.log('for');
  //     const newParticle = {
  //       x: x * Math.random(),
  //       y: y * Math.random(),
  //       size: Math.random() * 10 + 1,
  //       color: `hsl(${hue}, 100%, 50%)`,
  //       speedX: Math.random() * 3 - 1.5,
  //       speedY: Math.random() * 3 - 1.5,
  //     };
  //     hue += 2;
  //     generatedParticles = [...generatedParticles, newParticle];
  //     console.log(generatedParticles, 'generatedParticles');
  //   }
  //   return generatedParticles;
  // };

  // const draw = () => {
  //   if (ctx) {
  //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //     hue++;
  //     if (particles.length > 0) {
  //       const updatedParticles = particles.map((particle) =>
  //         updateParticle(particle),
  //       );
  //       if (updatedParticles.length > 0) {
  //         // setParticles([...updatedParticles]);
  //         updatedParticles.forEach((particle) => {
  //           const {
  //             x,
  //             y,
  //             size,
  //             speedX,
  //             speedY,
  //             directionX,
  //             directionY,
  //             color,
  //           } = particle;
  //           ctx.beginPath();
  //           ctx.fillStyle = color;
  //           ctx.arc(x, y, size, 0, Math.PI * 2);

  //           ctx.fill();
  //         });
  //       }

  //       // if (x < 0 || x > ctx.canvas.width) {
  //       //   console.log('cząstka opuszcza x');
  //       //   directionX = !directionX;
  //       // }
  //       // if (y < 0 || y > ctx.canvas.height) {
  //       //   console.log('opuszcza Y');
  //       //   directionY = !directionY;
  //       // }
  //       // if (directionX === -1) {
  //       //   x -= speedX * hue * directionX;
  //       // } else {
  //       //   x += speedX * hue * directionX;
  //       // }

  //       // if (directionY === -1) {
  //       //   y -= speedY * hue * directionY;
  //       // } else {
  //       //   y += speedY * hue * directionY;
  //       // }
  //     }
  //   }
  // };

  const draw = (particles) => {
    if (ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      hue++;
      const updatedParticles = updateParticle();
      if (updatedParticles.length < 10) {
        generateParticle();
      }
      if (updatedParticles.length > 0) {
        updatedParticles.forEach(
          ({ x, y, size, speedX, speedY, directionX, directionY }) => {
            ctx.beginPath();
            const color = `hsl(${hue}, 100%, 50%)`;
            ctx.fillStyle = color;
            // if (x < 0 || x > ctx.canvas.width) {
            //   console.log('cząstka opuszcza x');
            //   directionX = !directionX;
            // }
            // if (y < 0 || y > ctx.canvas.height) {
            //   console.log('opuszcza Y');
            //   directionY = !directionY;
            // }
            // if (directionX === -1) {
            //   x -= speedX * hue * directionX;
            // } else {
            //   x += speedX * hue * directionX;
            // }

            // if (directionY === -1) {
            //   y -= speedY * hue * directionY;
            // } else {
            //   y += speedY * hue * directionY;
            // }

            ctx.arc(x, y, size, 0, Math.PI * 2);

            ctx.fill();
          },
        );
      }
    }
  };

  useEffect(() => {
    draw();
    updateParticle();
  }, [particles]);

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    let newParticles = [];

    for (let i = 0; i < 3; i++) {
      const newParticle = generateParticle();
      newParticles = [...newParticles, newParticle];
    }
    setParticles([...particles, ...newParticles]);
  };

  return (
    <Canvas
      draw={draw}
      updateParticle={updateParticle}
      establishContext={establishContext}
      establishCanvasWidth={establishCanvasWidth}
      establishCanvasHeight={establishCanvasHeight}
      onClick={handleMouseMove}
    />
  );
};

export default Animation;
