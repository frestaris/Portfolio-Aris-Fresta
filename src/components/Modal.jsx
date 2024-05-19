// import React, { useRef, useEffect } from "react";
// import emailjs from "emailjs-com";

// const Modal = ({ closeModal }) => {
//   const formRef = useRef();

//   useEffect(() => {
//     // Add modal-open class to body to prevent scrolling when modal is open
//     document.body.classList.add("modal-open");

//     // Cleanup function to remove the class when modal is closed
//     return () => {
//       document.body.classList.remove("modal-open");
//     };
//   }, []);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     // Extract form input values
//     const userName = formRef.current.querySelector("#user_name").value;
//     const userEmail = formRef.current.querySelector("#user_email").value;
//     const message = formRef.current.querySelector("#message").value;

//     // Define email template parameters
//     const templateParams = {
//       user_name: userName,
//       user_email: userEmail,
//       message: message,
//     };

//     // Send email using EmailJS
//     emailjs
//       .send(
//         "service_peq8stj",
//         "template_tgefvm4",
//         templateParams,
//         "IneW6DcO23Ir_cqhc"
//       )
//       .then(
//         () => {
//           console.log("SUCCESS!");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal show d-block" tabIndex="-1">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h1 className="modal-title fs-2">Email me</h1>
//               <button
//                 type="button"
//                 className="btn-close"
//                 aria-label="Close"
//                 onClick={closeModal}
//               ></button>
//             </div>
//             <div className="modal-body">
//               <form ref={formRef} onSubmit={sendEmail}>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="user_name"
//                     name="user_name"
//                     placeholder="Your Name..."
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="user_email"
//                     name="user_email"
//                     placeholder="Your Email..."
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <textarea
//                     className="form-control"
//                     id="message"
//                     name="message"
//                     rows="4"
//                     placeholder="Your message..."
//                     required
//                   ></textarea>
//                 </div>
//                 <button type="submit" className="w-100 btn btn-dark">
//                   Send Email
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";

const Modal = ({ closeModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = e.target.user_name.value;
    const userEmail = e.target.user_email.value;
    const message = e.target.message.value;

    const templateParams = {
      user_name: userName,
      user_email: userEmail,
      message: message,
    };

    emailjs
      .send(
        "service_peq8stj",
        "template_tgefvm4",
        templateParams,
        "IneW6DcO23Ir_cqhc"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="modal-overlay">
      <div className="modal show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered" ref={modalRef}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-2">Email me</h1>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={sendEmail}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="user_name"
                    placeholder="Your Name..."
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="user_email"
                    placeholder="Your Email..."
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="4"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="w-100 btn btn-dark">
                  Send Email
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
