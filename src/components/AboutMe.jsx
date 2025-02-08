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
                theme === "light" ? "bg-white" : "bg-dark"
              }`}
            >
              <i className="bi bi-award" style={{ fontSize: "30px" }}></i>
              <h3>Experience</h3>
              <p>
                2+ year <br />
                Web Development
              </p>
            </div>
            <div
              className={`content mt-2 ${
                theme === "light" ? "bg-white" : "bg-dark"
              }`}
            >
              <i
                className="bi bi-person-workspace"
                style={{ fontSize: "30px" }}
              ></i>
              <h3>Education</h3>
              <p>Self-Taught Web Developer</p>
            </div>
          </div>
        </div>
        <p className="text-center pt-4">
          "Over the past few years, I have dedicated myself in learning and
          improving my skills with modern technologies, with a particular focus
          on React framework. My expertise includes building dynamic,
          responsive, and user-friendly applications, leveraging React Redux for
          state management, and implementing scalable and maintainable code.
          <br />
          <br />I have hands-on experience developing full-stack applications
          using MERN.I’ve learned a lot by working on personal projects, taking
          online courses, and collaborating on projects that feel like
          real-world work. I’m passionate about writing clean, efficient, and
          responsive code that works well across all devices. I’m always looking
          to improve my skills and stay ahead in the tech industry. Weird as it
          sound, I really enjoy debugging and testing to ensure seamless
          functionality and performance.
        </p>
      </div>

      <hr />
    </section>
  );
};
export default AboutMe;
