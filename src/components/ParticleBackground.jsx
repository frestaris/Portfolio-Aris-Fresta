import { useCallback } from "react";
import { useSelector } from "react-redux";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

const ParticleBackground = () => {
  const { theme } = useSelector((state) => state.theme);

  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links",
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: window.innerWidth < 768 ? 50 : 80,
          },
          color: {
            value: theme === "dark" ? "#ffffff" : "#444",
          },
          links: {
            color: theme === "dark" ? "#ffffff" : "#444",
            opacity: 0.5,
            distance: window.innerWidth < 768 ? 70 : 150,
          },
          move: {
            speed: 0.4,
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
