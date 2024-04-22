import { useEffect, useRef, useState } from 'react';
let hue = 0;

const Canvas = (props) => {
  const {
    draw,
    updateParticle,
    fps = 30,
    establishContext,
    establishCanvasWidth,
    establishCanvasHeight,
    width = '100%',
    height = '100%',
    backgroundColor = '#000',
    ...rest
  } = props;
  const canvasRef = useRef();
  const [context, setContext] = useState(null);
  // const [particles, setParticles] = useState([]);

  const resizeCanvas = (context) => {
    const canvas = context.canvas;
    const { width, height } = canvas.getBoundingClientRect();

    if (canvas.width !== width || canvas.height !== height) {
      const { devicePixelRatio: ratio = 1 } = window;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.scale(ratio, ratio);
      establishCanvasWidth(canvas.width);
      establishCanvasHeight(canvas.height);
      return true;
    }
    return false;
  };

  // const draw = (frameCount) => {
  //   context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  //   context.fillStyle = 'white';
  //   context.beginPath();
  //   context.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
  //   context.fill();

  //   window.requestAnimationFrame(() => draw(context));
  // };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      setContext(ctx);
      resizeCanvas(ctx);
      if (establishContext) {
        establishContext(ctx);
      }
    }
  }, []);

  useEffect(() => {
    let frameCount = 0;
    let animationFrameId;

    // Check if null context has been replaced on component mount
    if (context) {
      const render = () => {
        // frameCount++;
        draw();
        // updateParticle();
        animationFrameId = window.requestAnimationFrame(render);
      };
      // setInterval(draw, 100000 / 60);
      render();
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  // useEffect(() => {
  //   let frameCount = 0;
  //   let animationFrameId;

  //   // Check if null context has been replaced on component mount
  //   if (context) {
  //     const render = () => {
  //       // frameCount++;
  //       draw();
  //       updateParticle();
  //       animationFrameId = window.requestAnimationFrame(render);
  //     };
  //     // setInterval(draw, 100000 / 60);
  //     render();
  //   }

  //   return () => {
  //     window.cancelAnimationFrame(animationFrameId);
  //   };
  // }, [draw, context]);

  // const update = ({ x, y, size, color, speedX, speedY }) => {
  //   // console.log('aktual cząstkę');
  //   console.log(x, y, size, color, speedX, speedY);
  //   x += speedX;
  //   y += speedY;
  //   let newSize = size * (1 - 0.3);
  //   if (size > 0.2) size -= 0.1;
  //   const updatedParticle = {
  //     x,
  //     y,
  //     size,
  //     color,
  //     speedX,
  //     speedY,
  //   };
  //   return updatedParticle;
  // };

  // const handleParticles = (context) => {
  //   particles.forEach((particle, index) => {
  //     const updatedParticle = update(particle);
  //     setParticles([...particles, updatedParticle]);
  //     context.beginPath();
  //     context.strokeStyle = 'white';
  //     context.lineWidth = 0.5;
  //     context.moveTo(particle.x, particle.y);
  //     context.lineTo(updatedParticle.x, updatedParticle.y);
  //     context.stroke();

  //     if (particle.size <= 0.3) {
  //       particles.splice(index, 1);
  //     }
  //   });
  // };

  // const generateParticle = (x, y) => {
  //   console.log(x, y);
  //   const newParticle = {
  //     x: x,
  //     y: y,
  //     size: Math.random() * 10 + 1,
  //     color: `hsl(${hue}, 100%, 50%)`,
  //     speedX: Math.random() * 3 - 1.5,
  //     speedY: Math.random() * 3 - 1.5,
  //   };
  //   hue += 2;
  //   console.log(newParticle, 'particles wygenerowane');
  //   console.log(particles, 'wszystkie');
  //   setParticles([...particles, newParticle]);
  // };

  // useEffect(() => {
  //   const canvas = ref.current;
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  //   const context = canvas.getContext('2d');
  //   let animationID;

  //   const renderer = () => {
  //     context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  //     draw(context);
  //     handleParticles();
  //     animationID = window.requestAnimationFrame(renderer);
  //   };

  //   renderer();

  //   return () => window.cancelAnimationFrame(animationID);
  // }, []);

  // const handleMouseMove = (e) => {
  //   console.log('generowanie');
  //   const mouseX = e.clientX;
  //   const mouseY = e.clientY;
  //   console.log(mouseX, mouseY);
  //   for (let i = 0; i < 2; i++) {
  //     generateParticle(mouseX, mouseY);
  //   }
  //   // console.log(particles, 'particles');
  //   // draw(context);
  // };
  return (
    <canvas
      ref={canvasRef}
      {...rest}
      style={{ width, height, backgroundColor }}
    />
  );
};

export default Canvas;
