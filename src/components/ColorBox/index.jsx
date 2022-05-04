import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ColorBox.scss";

ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
  const randomIndex = Math.trunc(Math.random() * COLOR_LIST.length);
  return COLOR_LIST[randomIndex];
}

function ColorBox(props) {
  const [color, setColor] = useState(() => {
    const initColor =
      JSON.parse(localStorage.getItem("box_color")) || "deeppink";
    console.log(initColor);
    return initColor;
  });

  const handleColorBox = () => {
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("box_color", JSON.stringify(newColor));
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleColorBox}
    ></div>
  );
}

export default ColorBox;
