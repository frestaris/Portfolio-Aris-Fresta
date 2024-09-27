import React, { useEffect, useState } from "react";
import Card from "./Card";
import youtube1 from "../assets/Youtube-1.png";
import youtube2 from "../assets/Youtube-2.png";
import youtube3 from "../assets/Youtube-3.png";
import bankist1 from "../assets/Bankist-1.png";
import bankist2 from "../assets/Bankist-2.png";
import bankist3 from "../assets/Bankist-3.png";
import website1 from "../assets/Website1.png";
import website2 from "../assets/Website2.png";
import website3 from "../assets/Website3.png";
import "./Projects.css";

const projectData = [
  {
    id: 1,
    title: "Youtube Clone App",
    linkUrl: "https://github.com/frestaris/Youtube-clone-React",
    live: "https://www.google.com/",
    images: [youtube1, youtube2, youtube3],
  },
  {
    id: 2,
    title: "Bankist Transaction",
    linkUrl: "https://github.com/frestaris/Bank-account-simple-template",
    live: "https://www.google.com/",
    images: [bankist2, bankist1, bankist3],
  },
  {
    id: 3,
    title: "University Website",
    linkUrl: "https://github.com/frestaris/University-website-template",
    live: "https://www.google.com/",
    images: [website1, website2, website3],
  },
  {
    id: 4,
    title: "Gym Website",
    linkUrl: "https://github.com/frestaris/Gym-React",
    live: "https://brosgym.netlify.app/",
    images: [website1, website2, website3],
  },
  {
    id: 5,
    title: "World Tracker",
    linkUrl: "https://github.com/frestaris/world-tracker-react",
    live: "https://world-tracker-react.netlify.app/",
    images: [website1, website2, website3],
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
