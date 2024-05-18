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
    <section>
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
                  <SkillItem skill="JavaScript" level="Experienced" />
                  <SkillItem skill="React" level="Experienced" />
                  <SkillItem skill="Bootstrap" level="Experienced" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card ">
              <h2 className="mb-4 text-center">BackEnd Development</h2>
              <div className="row">
                <div className="d-flex flex-wrap justify-content-center">
                  <SkillItem skill="Node.js" level="Experienced" />
                  <SkillItem skill="Express" level="Experienced" />
                  <SkillItem skill="MongoDB" level="Experienced" />
                  <SkillItem skill="SQL" level="Experienced" />
                  <SkillItem skill="Python" level="Experienced" />
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
