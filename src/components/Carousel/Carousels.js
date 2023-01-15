import React from "react";
import "./Carousels.css";

function Carousels({ carouselData }) {
  return (
    <div>
      {/* left arrow  */}

      {carouselData.map((value) => (
        <img className="carousel_images" src={value.image} />
      ))}

      {/* right arrow  */}
    </div>
  );
}
export default Carousels;
