import React from "react";
import "../Component/Model.css";
const Modal = ({ image, onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <img src={image.src || "../assets/intro-bg.jpg"} alt={image.title} />
        <h2>{image.title}</h2>
        <p>{image.description}</p>
      </div>
    </div>
  );
};

export default Modal;
