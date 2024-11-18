import { useSelector } from "react-redux";
import pic from "../assets/pic-1.jpg";
import "./AboutMe.css";

const AboutMe = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <section id="about-me">
      <div className="row g-lg-5">
        <div className="text-center">
          <p>Get To Know More</p>
          <h1>About Me</h1>
        </div>

        <div className="col-lg-6 d-flex align-items-center justify-content-center text-lg-start">
          <img
            src={pic}
            className="mx-lg-auto img-fluid rounded-5 picture"
            alt=""
            loading="lazy"
          />
        </div>

        <div className="text-align col-md-10 mx-auto col-lg-5">
          <div className="d-grid gap-2 flex">
            <div
              className={`content mt-2 ${
                theme === "dark" ? "dark-mode" : "light-mode"
              }`}
            >
              <i className="bi bi-award" style={{ fontSize: "30px" }}></i>
              <h3>Experience</h3>
              <p>
                1+ year <br />
                Frontend Development
              </p>
            </div>
            <div
              className={`content mt-2 ${
                theme === "dark" ? "dark-mode" : "light-mode"
              }`}
            >
              <i
                className="bi bi-person-workspace"
                style={{ fontSize: "30px" }}
              ></i>
              <h3>Education</h3>
              <p>Diploma of IT</p>
            </div>
          </div>
        </div>
        <p className="text-center pt-4">
          With an Italian-Greek background, I have been living in Australia for
          10 years now, where I have settled my own family. I have always had a
          strong passion for web development. Although I haven't had
          professional experience in the field yet, I have spent several years
          dedicated to self-learning and developing foundational skills in web
          development. Through online courses, tutorials, and personal projects,
          I have acquired a solid understanding of HTML, CSS, and JavaScript. My
          self- driven approach to learning, coupled with a natural aptitude for
          grasping new concepts quickly, has equipped me with the ability to
          adapt in new environments. I am ready to bring my skills and passion
          to the next level and finally make it my profession.
        </p>
      </div>

      <hr />
    </section>
  );
};
export default AboutMe;
