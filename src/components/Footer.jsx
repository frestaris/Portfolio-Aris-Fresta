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

  return (
    <footer className="container py-3 my-4">
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
          <a href="#" className="nav-link px-2 text-body-secondary">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Experience
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Projects
          </a>
        </li>
      </ul>
      <p className="text-center text-body-secondary">© {currentYear} Aris</p>
    </footer>
  );
};

export default Footer;
