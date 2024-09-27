import React, { useState } from "react";
import Modal from "./Modal";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleEmailMeClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const offset = 10;
      const targetScrollPosition = section.offsetTop - navbarHeight - offset;
      window.scrollTo({ top: targetScrollPosition, behavior: "smooth" });
    } else {
      console.log("Section not found:", sectionId);
    }
  };

  const handleFooterNavItemClick = (sectionId, event) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <footer id="email" className="container my-4">
      {showModal && (
        <div className="modal-overlay">
          <Modal closeModal={closeModal} />
        </div>
      )}
      <div className="text-center py-5">
        <p>Get in Touch</p>
        <button
          className="btn btn-dark btn-lg w-50"
          onClick={handleEmailMeClick}
        >
          Email Me
        </button>
      </div>
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a
            href="#"
            className="nav-link px-2 text-body-secondary"
            onClick={(event) => handleFooterNavItemClick("about-me", event)}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link px-2 text-body-secondary"
            onClick={(event) => handleFooterNavItemClick("skills", event)}
          >
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link px-2 text-body-secondary"
            onClick={(event) => handleFooterNavItemClick("projects", event)}
          >
            Projects
          </a>
        </li>
      </ul>
      <p className="text-center text-body-secondary">
        Copyright © {currentYear} Aris
      </p>
    </footer>
  );
};

export default Footer;
