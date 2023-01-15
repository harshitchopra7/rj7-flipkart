import React from "react";
import "./CarouselCard.css";

function CarouselCard(props) {
  return <img className="carousel_images" src={props.image} />;
}
export default CarouselCard;
