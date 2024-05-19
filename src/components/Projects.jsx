import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div id="projects" className="container mt-5">
      <div className="text-center pb-5">
        <p>Browse My Recent</p>
        <h1>Projects</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
          <Card id={1} />
        </div>
        <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center">
          <Card id={2} />
        </div>
        <div className="col-lg-4 mb-4 d-flex justify-content-center">
          <Card id={3} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
