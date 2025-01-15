"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#ffff",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "bubble", // Cambia el modo a "bubble" para que crezcan
          },
        },
        modes: {
          bubble: {
            distance: 150, // Distancia a la que el efecto se activa
            size: 15, // Tamaño al que crecen las partículas
            duration: 2, // Duración del efecto (en segundos)
            opacity: 1, // Opcional: Cambia la opacidad mientras crecen
          },
          repulse: {
            distance: 100, // Si quieres mantener el efecto "repulse" al hacer clic
          },
        },
      },
      particles: {
        color: {
          value: "#cfd2d4",
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "polygon", // Formas de las partículas
        },
        size: {
          value: { min: 5, max: 10 }, // Tamaño inicial
        },
      },
      detectRetina: true,
    }),
    []
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
