import React from "react";
import "../Component/ImageCard.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div className="image-card" onClick={onClick}>
      <img src={image.src} alt={image.title} />
      <div className="overlay">
        <h3>{image.title}</h3>
        <p>{image.description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
