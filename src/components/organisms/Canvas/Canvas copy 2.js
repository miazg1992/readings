import { useEffect, useRef, useState } from 'react';
let hue = 0;

const Canvas = (props) => {
  const ref = useRef();
  const [particles, setParticles] = useState([]);
  let canvas;
  let context;

  const init = () => {
    canvas = ref.current;

    context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  useEffect(() => {
    init();
  }, []);
  const update = ({ x, y, size, color, speedX, speedY }) => {
    // console.log('aktual cząstkę');
    console.log(x, y, size, color, speedX, speedY);
    x += speedX;
    y += speedY;
    let newSize = size * (1 - 0.3);
    if (size > 0.2) size -= 0.1;
    const updatedParticle = {
      x,
      y,
      size,
      color,
      speedX,
      speedY,
    };
    return updatedParticle;
  };

  const draw = () => {
    particles.forEach(({ x, y, size, color }) => {
      // console.log(x, y, size, color);
      context.fillStyle = color;
      context.beginPath();
      context.arc(x, y, size, 0, Math.PI * 2);
      context.fill();
    });
  };

  const handleParticles = () => {
    particles.forEach((particle, index) => {
      const updatedParticle = update(particle);
      setParticles([...particles, updatedParticle]);
      context.beginPath();
      context.strokeStyle = 'white';
      context.lineWidth = 0.5;
      context.moveTo(particle.x, particle.y);
      context.lineTo(updatedParticle.x, updatedParticle.y);
      context.stroke();

      if (particle.size <= 0.3) {
        particles.splice(index, 1);
      }
    });
  };

  useEffect(() => {
    draw();
  }, [particles]);

  const generateParticle = (x, y) => {
    console.log('tworzenie nowej', x, y);
    const newParticle = {
      x: x,
      y: y,
      size: Math.random() * 10 + 1,
      color: `hsl(${hue}, 100%, 50%)`,
      speedX: Math.random() * 3 - 1.5,
      speedY: Math.random() * 3 - 1.5,
    };
    hue += 2;
    // console.log(particles, 'particles wygenerowane');
    setParticles([...particles, newParticle]);
  };
  const paint = () => {
    context.clearRect(0, 0, context.canvas.widdth, context.canvas.height);
    handleParticles();
    window.requestAnimationFrame(paint);
  };

  paint();
  // useEffect(() => {
  //   const canvas = ref.current;
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  //   const context = canvas.getContext('2d');
  //   let animationID;

  //   const renderer = () => {
  //     context.clearRect(0, 0, context.canvas.widdth, context.canvas.height);
  //     draw(context);
  //     handleParticles();
  //     animationID = window.requestAnimationFrame(renderer);
  //   };

  //   renderer();

  //   return () => window.cancelAnimationFrame(animationID);
  // }, []);

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    for (let i = 0; i < 2; i++) {
      generateParticle(mouseX, mouseY);
      console.log('generowanie');
    }
    // console.log(particles, 'particles');
    // draw(context);
  };
  return <canvas ref={ref} {...props} onClick={handleMouseMove} />;
};

export default Canvas;
