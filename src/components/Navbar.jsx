import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about-me");
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage nav open/closed

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
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const offset = 10;

      // Check if hamburger menu is visible by detecting screen width
      const isHamburgerVisible = window.innerWidth < 768; // You can adjust this value to match your CSS breakpoint

      // Scroll position logic
      const additionalOffset = isHamburgerVisible ? -200 : 0; // Add 50px when the hamburger is visible
      const targetScrollPosition =
        section.offsetTop - navbarHeight - offset - additionalOffset;

      window.scrollTo({ top: targetScrollPosition, behavior: "smooth" });
    } else {
      console.log("Section not found:", sectionId);
    }
  };

  const handleNavItemClick = (sectionId, event) => {
    event.preventDefault();
    scrollToSection(sectionId);
    setIsNavOpen(false);
  };

  const iconMapping = {
    "about-me": "bi bi-person-fill",
    skills: "bi bi-star-fill",
    projects: "bi bi-folder-fill",
    email: "bi bi-envelope-fill",
  };

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            Aris's Portfolio
          </a>
          <div
            className={`ham-menu ${isNavOpen ? "open" : ""}`}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              {["about-me", "skills", "projects", "email"].map((section) => (
                <li className="nav-item" key={section}>
                  <a
                    href="#"
                    className="nav-link"
                    onClick={(event) => handleNavItemClick(section, event)}
                  >
                    <i
                      className={iconMapping[section]}
                      style={{ fontSize: "20px", marginRight: "5px" }}
                    ></i>
                    {section
                      .replace("-", " ")
                      .replace(/^\w/, (c) => c.toUpperCase())}
                  </a>
                </li>
              ))}
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
