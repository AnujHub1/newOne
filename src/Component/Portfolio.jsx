import React, { useState } from "react";
import "../../src/App.css";
import ImageCard from "../Component/ImageCard.jsx";
import Model from "../Component/Model.jsx";
import profilPic from "../assets/profile-pic.jpg";

const images = [
  {
    id: 1,
    src: "../assets/profile-pic.jpg",
    title: "Statue of Liberty",
    description: "A symbol of freedom in the USA.",
  },
  {
    id: 2,
    src: "../assets/profile-pic.jpg",
    title: "Photographer",
    description: "Capturing the world one click at a time.",
  },
  {
    id: 3,
    src: "../assets/profile-pic.jpg",
    title: "Classic Car",
    description: "Retro vibes and old-school charm.",
  },
  {
    id: 4,
    src: "../assets/profile-pic.jpg",
    title: "Above the Clouds",
    description: "A view from the sky.",
  },
  {
    id: 5,
    src: "../assets/profile-pic.jpg",
    title: "Healthy Salad",
    description: "Fresh and vibrant food photography.",
  },
  {
    id: 6,
    src: "../assets/profile-pic.jpg",
    title: "Lighthouse",
    description: "Guiding light for sailors.",
  },
];

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="app">
      <h2 className="title">My Portfolio</h2>
      <div className="grid">
        {images.map((img) => (
          <ImageCard
            key={img.id}
            image={img}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
      {selectedImage && (
        <Model image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
}

export default Portfolio;
