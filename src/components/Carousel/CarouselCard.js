import React from "react";
import "./CarouselCard.css";

function CarouselCard({ image }) {
  return (
    <div>
      <img className="carousel_images" src={image} />
    </div>
  );
}
export default CarouselCard;
