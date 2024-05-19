import React from "react";
import pic from "../assets/pic-1.jpg";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="container">
      <div className="row g-lg-5">
        <div className="text-center py-5">
          <p>Get To Know More</p>
          <h1>About Me</h1>
        </div>

        <div className="col-lg-7 d-flex align-items-center justify-content-center text-lg-start">
          <img
            src={pic}
            className="mx-lg-auto img-fluid rounded-5 picture"
            alt=""
            loading="lazy"
          />
        </div>

        <div className="text-align col-md-10 mx-auto col-lg-5">
          <div className="d-grid gap-2 flex">
            <div className="content" style={{ marginTop: "2rem" }}>
              <i className="bi bi-award" style={{ fontSize: "35px" }}></i>
              <h3>Experience</h3>
              <p>
                2+ years <br />
                Frontend Development
              </p>
            </div>
            <div className="content" style={{ marginTop: "2rem" }}>
              <i
                className="bi bi-person-workspace"
                style={{ fontSize: "32px" }}
              ></i>
              <h3>Education</h3>
              <p>
                B.Sc. Bachelors Degree
                <br />
                M.Sc. Masters Degree
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="p-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo, quia
        rerum earum atque, incidunt blanditiis ullam explicabo iusto veritatis
        molestiae minima. Autem qui amet cum inventore, dolorem error fugit?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae omnis
        magnam quasi voluptatibus sapiente eum consectetur perspiciatis enim
        similique quia quibusdam consequatur excepturi assumenda, nulla, nam ad
        placeat esse eos.
      </p>

      <hr />
    </section>
  );
};
export default AboutMe;

<div class="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>;
