import React, { useEffect, useState } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactjs from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import git from "../assets/git.png";
import netlify from "../assets/netlify.png";
import "./Experience.css";

const Experience = () => {
  const [visibleSkills, setVisibleSkills] = useState(Array(9).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const skills = document.querySelectorAll(".skill-item");

      skills.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
          setVisibleSkills((prev) => {
            const newSkills = [...prev];
            newSkills[index] = true;
            return newSkills;
          });
        } else {
          setVisibleSkills((prev) => {
            const newSkills = [...prev];
            newSkills[index] = false;
            return newSkills;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { skill: "HTML", img: html },
    { skill: "CSS", img: css },
    { skill: "JavaScript", img: javascript },
    { skill: "React", img: reactjs },
    { skill: "Bootstrap", img: bootstrap },
    { skill: "Node.js", img: node },
    { skill: "Github", img: github },
    { skill: "Git", img: git },
    { skill: "Netlify", img: netlify },
  ];

  return (
    <section id="skills">
      <div className="container mt-5">
        <div className="text-center pb-5">
          <p>Explore My</p>
          <h1>Skills</h1>
        </div>

        <div className="row d-flex justify-content-center align-items-center">
          {skills.map((item, index) => (
            <div
              key={index}
              className={`col-md-2 mx-md-4 my-md-3 mt-3 col-5 mx-2 skill-item d-flex flex-column justify-content-center align-items-center py-3 m-3 rounded border ${
                visibleSkills[index] ? "visible" : ""
              }`}
            >
              <div className="skill-image mb-2">
                <img src={item.img} alt={item.skill} className="img-fluid" />
              </div>
              <div>
                <span className="title d-block">{item.skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Experience;
