import { useEffect, useState } from "react";
import "./Navbar.css";
import skillsIcon from "../assets/star.png";
import projectsIcon from "../assets/folder.png";
import userIcon from "../assets/user.png";
import { useSelector } from "react-redux";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about-me");
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const { theme } = useSelector((state) => state.theme);

  const renderTooltip = (message) => (props) =>
    (
      <Tooltip id={`tooltip-${message}`} {...props}>
        {message}
      </Tooltip>
    );

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveSection(section.id);
        }
      });

      setShowScrollTopButton(window.scrollY > sections[1].offsetTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const targetScrollPosition = section.offsetTop;

      window.scrollTo({ top: targetScrollPosition, behavior: "smooth" });
    } else {
      console.log("Section not found:", sectionId);
    }
  };

  const handlePieClick = (sectionId, event) => {
    event.preventDefault();
    scrollToSection(sectionId);
    document.body.classList.toggle("active");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="navbar fixed-top">
        <div className="container">
          <div
            className="pie pie1"
            onClick={(event) => handlePieClick("projects", event)}
          >
            <div className="pie-color pie-color1">
              <OverlayTrigger
                placement="left"
                overlay={renderTooltip("Projects")}
              >
                <img
                  src={projectsIcon}
                  alt="Projects"
                  className="icon projects"
                />
              </OverlayTrigger>
            </div>
          </div>
          <div
            className="pie pie2"
            onClick={(event) => handlePieClick("skills", event)}
          >
            <div className="pie-color pie-color2">
              <OverlayTrigger
                placement="left"
                overlay={renderTooltip("Skills")}
              >
                <img src={skillsIcon} alt="Skills" className="icon skills" />
              </OverlayTrigger>
            </div>
          </div>
          <div
            className="pie pie3"
            onClick={(event) => handlePieClick("about-me", event)}
          >
            <div className="pie-color pie-color3">
              <OverlayTrigger
                placement="left"
                overlay={renderTooltip("About Me")}
              >
                <img src={userIcon} alt="About Me" className="icon user" />
              </OverlayTrigger>
            </div>
          </div>

          <div
            className={`menu ${
              theme === "dark" ? "dark-mode-menu" : "light-mode"
            }`}
            onClick={() => document.body.classList.toggle("active")}
          >
            <svg
              className="hamburger"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
            >
              <g
                fill="none"
                stroke={theme === "dark" ? "#fff" : "#000"}
                strokeWidth="7.999"
                strokeLinecap="round"
              >
                <path d="M 55,26.000284 L 24.056276,25.999716" />
                <path d="M 24.056276,49.999716 L 75.943724,50.000284" />
                <path d="M 45,73.999716 L 75.943724,74.000284" />
                <path d="M 75.943724,26.000284 L 45,25.999716" />
                <path d="M 24.056276,73.999716 L 55,74.000284" />
              </g>
            </svg>
          </div>
        </div>
      </nav>
      {showScrollTopButton && (
        <button className="scroll-top-button" onClick={scrollToTop}>
          <i className="bi bi-arrow-up-short" style={{ fontSize: "30px" }}></i>
        </button>
      )}
    </>
  );
};

export default Navbar;
