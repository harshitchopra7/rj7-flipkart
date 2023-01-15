import React from "react";
import "./Carousel.css";
import Carousels from "./Carousels";

function Carousel() {
  const carouselData = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/81EZPF-FSdL._SX3000_.jpg",
      name: "Plants",
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/81OCE7mUqhL._SX3000_.jpg",
      name: "Headphones",
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/81KqtuapUzL._SX3000_.jpg",
      name: "Groceries",
    },
  ];

  return (
    <div className="carousel">
      <Carousels carouselData={carouselData} />
    </div>
  );
}
export default Carousel;
