import "./Experience.css";
import React from "react";

const SkillItem = ({ skill, level }) => {
  return (
    <div className="d-flex align-items-center mb-2 justify-content-center fs-4 ">
      <i
        className="bi bi-check2-circle me-3 text-success"
        style={{ fontSize: "30px" }}
      ></i>

      <div className="ml-3">
        <span className="d-block">{skill}</span>
        <p className="mb-0 text-secondary">{level}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience">
      <div className="container mt-5">
        <div className="text-center pb-5">
          <p>Explore My</p>
          <h1>Experience</h1>
        </div>
        <div className="row">
          <div className="col-lg-6 pb-5">
            <div className="card">
              <h2 className="mb-4 text-center">FrontEnd Development</h2>
              <div className="row">
                <div className="d-flex flex-wrap justify-content-center">
                  <SkillItem skill="HTML" level="Experienced" />
                  <SkillItem skill="CSS" level="Experienced" />
                  <SkillItem skill="JavaScript" level="Intermediate" />
                  <SkillItem skill="React" level="Intermediate" />
                  <SkillItem skill="Bootstrap" level="Intermediate" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card ">
              <h2 className="mb-4 text-center">BackEnd Development</h2>
              <div className="row">
                <div className="d-flex flex-wrap justify-content-center">
                  <SkillItem skill="Node.js" level="Intermediate" />
                  <SkillItem skill="Express.js" level="Intermediate" />
                  <SkillItem skill="Javascript" level="Intermediate" />
                  <SkillItem skill="PostgreSQL" level="Basic" />
                  <SkillItem skill="API management" level="Basic" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
