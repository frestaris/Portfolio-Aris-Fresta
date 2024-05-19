import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  //
  // Button top scroller
  //
  const [activeSection, setActiveSection] = useState("about-me");
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

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
  //
  // Scrolling behavior
  //

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight; // Get the height of the navbar
      const offset = 10; // Additional offset to show the section a bit higher
      const targetScrollPosition = section.offsetTop - navbarHeight - offset;
      window.scrollTo({ top: targetScrollPosition, behavior: "smooth" });
    } else {
      console.log("Section not found:", sectionId);
    }
  };

  const handleNavItemClick = (sectionId, event) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            Aris's Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={(event) => handleNavItemClick("about-me", event)}
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={(event) => handleNavItemClick("experience", event)}
                >
                  Experiences
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={(event) => handleNavItemClick("projects", event)}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={(event) => handleNavItemClick("email", event)}
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showScrollTopButton && (
        <button
          className="scroll-top-button"
          onClick={(event) => handleNavItemClick("hero", event)}
        >
          <i className="bi bi-arrow-up-short" style={{ fontSize: "30px" }}></i>
        </button>
      )}
    </>
  );
};

export default Navbar;
