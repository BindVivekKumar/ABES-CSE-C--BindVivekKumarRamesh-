import React from "react";
import img from "../assets/krishna-f.jpg"; // adjust the path

function Image() {
  return (
    <div>
      <img src={img} alt="Krishna" width={500} height={300} />
    </div>
  );
}

export default Image;
