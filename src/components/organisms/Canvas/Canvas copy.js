import { useEffect, useRef, useState } from 'react';
let hue = 0;

const Canvas = (props) => {
  const ref = useRef();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const canvas = ref.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth;
    const context = canvas.getContext('2d');
    draw(context);
  }, [particles]);

  const draw = (context) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    if (particles) {
      if (particles.length > 0) {
        console.log(particles, 'jakieś czastki do rys');
        // const updatedParticles = particles.forEach((particle) =>
        //   update(particle),
        // );
        // console.log(updatedParticles);

        if (particles.length > 0) {
          particles.forEach(({ x, y, size, color }) => {
            console.log('zaczyna malować');
            context.fillStyle = color;
            context.beginPath();
            context.arc(x, y, size, 0, Math.PI * 2);
            context.fill();
          });
        }
      }
    }
    window.requestAnimationFrame(() => draw(context));
  };

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

  const handleParticles = (context) => {
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

  const generateParticle = (x, y) => {
    console.log(x, y);
    const newParticle = {
      x: x,
      y: y,
      size: Math.random() * 10 + 1,
      color: `hsl(${hue}, 100%, 50%)`,
      speedX: Math.random() * 3 - 1.5,
      speedY: Math.random() * 3 - 1.5,
    };
    hue += 2;
    console.log(newParticle, 'particles wygenerowane');
    console.log(particles, 'wszystkie');
    setParticles([...particles, newParticle]);
  };

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

  const handleMouseMove = (e) => {
    console.log('generowanie');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    console.log(mouseX, mouseY);
    for (let i = 0; i < 2; i++) {
      generateParticle(mouseX, mouseY);
    }
    // console.log(particles, 'particles');
    // draw(context);
  };
  return <canvas ref={ref} {...props} onClick={handleMouseMove} />;
};

export default Canvas;
