import React, { useState } from "react";
import "./Carousel.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
  const data = [
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
      image: "https://m.media-amazon.com/images/I/71JylaoMg+L._SX3000_.jpg",
      name: "Mobile",
    },
  ];

  // let index = 0;
  const [index, setIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(data[0].image);

  function showNextImage() {
    if (index >= 2) return;

    setCurrentImage(data[index + 1].image);
    setIndex(index + 1);
  }

  function showPreviousImage() {
    if (index == 0) return;

    setCurrentImage(data[index - 1].image);
    setIndex(index - 1);
  }

  console.log("index", index);

  return (
    <div className="carousel">
      {/* {carouselData.map((value) => (
        <CarouselCard image={value.image} />
      ))} */}

      <div>
        <ArrowBackIosNewIcon />
      </div>

      <img className="carousel_images" src={currentImage} />

      <div>
        <ArrowForwardIosIcon />
      </div>

      {/* <button onClick={showPreviousImage}>previous image</button>
      <button onClick={showNextImage}>next image</button> */}
    </div>
  );
}
export default Carousel;
