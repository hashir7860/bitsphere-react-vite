import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
          zIndex: 1,
        },
        background: {
          opacity:0.1,
          color: {
            value: "white", // Slightly lighter background for contrast
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.6, // Slightly slower hover effect
            },
          },
        },
        particles: {
          color: {
            value: "#000000", // Keeping it white for simplicity, can be changed
          },
          
          links: {
            color: "#000000",
            distance: 150,
            enable: true,
            opacity: 0.3, // Slightly higher opacity for link visibility
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true, // Making the movement more random for a natural feel
            speed: 3, // Slightly increased speed for faster movement
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50, // Slightly more particles for a denser effect
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 6 }, // Increased range for particle size
          },
        },
        detectRetina: true,
      }}
      className="absolute top-0 left-0 w-full h-full z-0"
      style={{
        opacity:0.7
      }}
    />
  );
};

export default ParticleBackground;
