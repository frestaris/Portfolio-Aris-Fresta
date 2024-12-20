import profile from "../assets/profile-pic.jpg";
import pdfFile from "../assets/Resume_ArisFresta_2025.pdf";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

import "./Hero.css";
import { useSelector } from "react-redux";

const Hero = () => {
  const { theme } = useSelector((state) => state.theme);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "Aris_Fresta_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="container">
      <div className="row flex-lg-row-reverse header">
        <div className="col-10 col-sm-8 col-lg-6 text-center">
          <img
            src={profile}
            className={`mx-lg-auto img-fluid profile-pic ${
              theme === "dark" ? "pic-dark-mode" : ""
            }`}
            alt="Profile"
            loading="lazy"
          />
        </div>

        <div className="col-lg-6 text-center">
          <p>Hello, I'm</p>
          <h1 className="display-6 fw-bold lh-1 mb-3">Aris Fresta</h1>
          <p className="lead">Full Stack Web Developer</p>

          <button
            type="button"
            className={`btn btn-lg px-4 me-md-2 rounded-pill ${
              theme === "dark" ? "btn-dark-mode" : "btn-light-mode"
            }`}
            onClick={handleDownloadCV}
          >
            Download CV
          </button>

          <div className="social-icons text-center mt-4">
            <img
              src={github}
              alt="GitHub"
              style={{ width: "35px", cursor: "pointer", marginRight: "15px" }}
              onClick={() =>
                (window.location.href = "https://github.com/frestaris")
              }
            />
            <img
              src={linkedin}
              alt="LinkedIn"
              style={{ width: "35px", cursor: "pointer", marginRight: "15px" }}
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/aris-fresta-33a631100/")
              }
            />
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: "35px", cursor: "pointer" }}
              onClick={() =>
                (window.location.href =
                  "https://www.facebook.com/profile.php?id=100089753169567")
              }
            />
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Hero;
