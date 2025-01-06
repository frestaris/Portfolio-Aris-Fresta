import { useEffect } from "react";
import "./InfoModal.css";

const InfoModal = ({ technologies, closeModal }) => {
  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <div className="info-modal-overlay" onClick={closeModal}>
      <div className="info-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="info-modal-close" onClick={closeModal}>
          &times;
        </button>
        <div>
          {technologies.map((language, index) => (
            <span
              key={index}
              className="badge rounded-pill bg-dark text-light me-2"
            >
              {language}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
