import React from "react";
import image from "./abstract-q-c-1094-724-2.png";

console.log(image);

const Parallax = () => {
  return (
    <div className="parallax-container">
      <div className="parallax">
        <img src={image} />
      </div>
    </div>
  );
};

export default Parallax;
