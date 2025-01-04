import { useEffect, useState } from "react";
import Card from "./Card";
import budget1 from "../assets/budgetmate1.png";
import budget2 from "../assets/budgetmate2.png";
import budget3 from "../assets/budgetmate3.png";
import eCommerce1 from "../assets/eCommerce1.png";
import eCommerce2 from "../assets/eCommerce2.png";
import eCommerce3 from "../assets/eCommerce3.png";
import worldTracker1 from "../assets/world-tracker-1.png";
import worldTracker2 from "../assets/world-tracker-2.png";
import worldTracker3 from "../assets/world-tracker-3.png";
import gym1 from "../assets/gym1.png";
import gym2 from "../assets/gym2.png";
import gym3 from "../assets/gym3.png";
import rentcar1 from "../assets/car-rental1.png";
import rentcar2 from "../assets/car-rental2.png";
import rentcar3 from "../assets/car-rental3.png";
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
    title: "e-Commerce Plants",
    linkUrl:
      "https://github.com/frestaris/Full-stack-e-commerce--Plants-website--React",
    live: "https://full-stack-e-commerce-plants-website-react.vercel.app/",
    images: [eCommerce1, eCommerce2, eCommerce3],
  },
  {
    id: 2,
    title: "Gym Website",
    linkUrl: "https://github.com/frestaris/Gym-React",
    live: "https://brosgym.netlify.app/",
    images: [gym1, gym2, gym3],
  },
  {
    id: 3,
    title: "Rental Car",
    linkUrl: "https://github.com/frestaris/Mern_Rental_Car",
    live: "https://mern-car-rent.netlify.app/",
    images: [rentcar1, rentcar2, rentcar3],
  },
  {
    id: 4,
    title: "BudgetMate",
    linkUrl: "https://github.com/frestaris/budgetmate",
    live: "https://budgetmate-frontend.vercel.app/",
    images: [budget1, budget2, budget3],
  },
  {
    id: 5,
    title: "Restaurant Website",
    linkUrl: "https://github.com/frestaris/react-restaurant-app",
    live: "https://react-app-restaurant-website-sample.netlify.app/",
    images: [restaurant1, restaurant2, restaurant3],
  },
  {
    id: 6,
    title: "Ask",
    linkUrl: "https://github.com/frestaris/ask",
    live: "https://ask-frontend-virid.vercel.app/",
    images: [ask1, ask2, ask3],
  },
  {
    id: 7,
    title: "World Tracker",
    linkUrl: "https://github.com/frestaris/world-tracker-react",
    live: "https://world-tracker-react.netlify.app/",
    images: [worldTracker1, worldTracker2, worldTracker3],
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
