import React from "react";

const ColorPicker = ({ color, onColorChange, onHexChange }) => {
  return (
    <div>
      <label>{color.role}</label>
      <input
        type="color"
        value={color.value}
        onChange={(e) => onColorChange(color.role, e.target.value)}
      />
      <input
        type="text"
        value={color.value}
        onChange={(e) => onHexChange(color.role, e.target.value)}
      />
    </div>
  );
};

export default ColorPicker;
