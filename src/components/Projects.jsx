import { useEffect, useState } from "react";
import Card from "./Card";
import budget1 from "../assets/budget1.png";
import budget2 from "../assets/budget2.png";
import budget3 from "../assets/budget3.png";
import keno1 from "../assets/keno-1.png";
import keno2 from "../assets/keno-2.png";
import keno3 from "../assets/keno-3.png";
import worldTracker1 from "../assets/world-tracker-1.png";
import worldTracker2 from "../assets/world-tracker-2.png";
import worldTracker3 from "../assets/world-tracker-3.png";
import gym1 from "../assets/gym1.png";
import gym2 from "../assets/gym2.png";
import gym3 from "../assets/gym3.png";
import watchit1 from "../assets/watch-it1.png";
import watchit2 from "../assets/watch-it2.png";
import ask1 from "../assets/ask1.png";
import ask2 from "../assets/ask2.png";
import ask3 from "../assets/ask3.png";
import restaurant1 from "../assets/restaurant-1.png";
import restaurant2 from "../assets/restaurant-2.png";
import restaurant3 from "../assets/restaurant-3.png";

import "./Projects.css";

const projectData = [
  {
    id: 1,
    title: "Gym Website",
    linkUrl: "https://github.com/frestaris/Gym-React",
    live: "https://brosgym.netlify.app/",
    images: [gym1, gym2, gym3],
  },
  {
    id: 2,
    title: "World Tracker",
    linkUrl: "https://github.com/frestaris/world-tracker-react",
    live: "https://world-tracker-react.netlify.app/",
    images: [worldTracker1, worldTracker2, worldTracker3],
  },
  {
    id: 3,
    title: "Keno Game",
    linkUrl: "https://github.com/frestaris/keno-simulator",
    live: "https://keno-simulator-game.netlify.app/",
    images: [keno1, keno2, keno3],
  },
  {
    id: 4,
    title: "Budget Planner",
    linkUrl: "https://github.com/frestaris/tracking-movements",
    live: "https://tracker-movements.netlify.app/",
    images: [budget1, budget2, budget3],
  },
  {
    id: 5,
    title: "Watch it",
    linkUrl: "https://github.com/frestaris/watch-it",
    live: "https://watch-itv1.netlify.app/",
    images: [watchit1, watchit2],
  },
  {
    id: 6,
    title: "Ask",
    linkUrl: "https://github.com/frestaris/ask",
    live: "https://ask-mern.onrender.com/",
    images: [ask1, ask2, ask3],
  },
  {
    id: 7,
    title: "Restaurant Website",
    linkUrl: "https://github.com/frestaris/react-restaurant-app",
    live: "https://react-app-restaurant-website-sample.netlify.app/",
    images: [restaurant1, restaurant2, restaurant3],
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(
    Array(projectData.length).fill(false)
  );

  useEffect(() => {
    const handleScroll = () => {
      const projects = document.querySelectorAll(".project-card");

      projects.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
          setVisibleProjects((prev) => {
            const newProjects = [...prev];
            newProjects[index] = true;
            return newProjects;
          });
        } else {
          setVisibleProjects((prev) => {
            const newProjects = [...prev];
            newProjects[index] = false;
            return newProjects;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="projects" className="container mt-5">
      <div className="text-center pb-5">
        <p>Browse My Recent</p>
        <h1>Projects</h1>
      </div>
      <div className="row justify-content-center">
        {projectData.map((project, index) => (
          <div key={project.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <Card
              className={`project-card ${
                visibleProjects[index] ? "visible" : ""
              }`}
              id={project.id}
              title={project.title}
              linkUrl={project.linkUrl}
              live={project.live}
              image={project.images}
            />
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Projects;
