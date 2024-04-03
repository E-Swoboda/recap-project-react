import React from "react";
import "./ColorCard.css";

const ColorCard = ({ color }) => {
  return (
    <div className="color-card" style={{ backgroundColor: color.value }}>
      <div className="color-info">
        <p className="color-name">{color.name}</p>
        <p className="color-hex">{color.value}</p>
        <p className="color-role">{color.role}</p>
      </div>
    </div>
  );
};

export default ColorCard;
