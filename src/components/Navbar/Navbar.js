import React from "react";
import "./Navbar.css";

const Navbar = () => {
  // Elements
  // 1. Logo
  // 2. Input Field
  // 3. Item1
  // 4. Item2
  // 3. Item3
  // 4. Item4

  return (
    <div className="navbar">
      <div className="navbar_left">
        <p>Flipkart</p>
        <input
          className="navbar_left_input"
          placeholder="Search for products, brands and more"
        />
      </div>

      <div className="navbar_right">
        <p>Name</p>
        <p>Become a seller</p>
        <p>More</p>
        <p>Cart</p>
      </div>
    </div>
  );
};
export default Navbar;
