import React from "react";
import profile from "../assets/profile-pic.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="container">
      <div className="row flex-lg-row-reverse header">
        <div className="col-10 col-sm-8 col-lg-6 text-center pt-5">
          <img
            src={profile}
            className="mx-lg-auto img-fluid rounded-circle profile-pic"
            alt="Bootstrap Themes"
            loading="lazy"
          />
        </div>

        <div className="col-lg-6 text-center">
          <p>Hello, I'm</p>
          <h1 className="display-6 fw-bold text-body-emphasis lh-1 mb-3">
            Aris Fresta
          </h1>
          <p className="lead">Front-end Web Developer</p>

          <button
            type="button"
            className="btn btn-dark btn-lg px-4 me-md-2 rounded-pill"
          >
            Download CV
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4 rounded-pill"
          >
            Info
          </button>
          <div className="text-center">
            <i
              className="bi bi-github"
              style={{ fontSize: "50px", cursor: "pointer" }}
              onClick={() =>
                (window.location.href = "https://github.com/frestaris")
              }
            ></i>
            <i
              className="bi bi-linkedin mx-4"
              style={{ fontSize: "50px", cursor: "pointer" }}
              onClick="location.href='https://google.com/"
            ></i>
            <i
              className="bi bi-facebook"
              style={{ fontSize: "50px", cursor: "pointer" }}
              onClick="location.href='https://google.com/"
            ></i>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Hero;
