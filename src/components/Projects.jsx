import React from "react";
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
2;
const projectData = [
  {
    id: 1,
    title: "Youtube Clone App",
    linkUrl: "https://github.com/frestaris/Youtube-clone-React",
    images: [youtube1, youtube2, youtube3],
  },
  {
    id: 2,
    title: "Bankist Transaction",
    linkUrl: "https://github.com/frestaris/Bank-account-simple-template",
    images: [bankist2, bankist1, bankist3],
  },
  {
    id: 3,
    title: "University Website",
    linkUrl: "https://github.com/frestaris/University-website-template",
    images: [website1, website2, website3],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container mt-5">
      <div className="text-center pb-5">
        <p>Browse My Recent</p>
        <h1>Projects</h1>
      </div>
      <div className="row justify-content-center">
        {projectData.map((project) => (
          <div key={project.id} className="col-12 col-md-12 col-lg-4 mb-4">
            <Card
              id={project.id}
              title={project.title}
              linkUrl={project.linkUrl}
              image={project.images}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
