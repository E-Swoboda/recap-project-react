import React, { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

const ColorCard = ({ color }) => {
  const [colorName, setColorName] = useState("");

  useEffect(() => {
    const fetchColorName = async () => {
      try {
        const response = await fetch(
          `https://www.thecolorapi.com/id?hex=${color.value.substr(1)}`
        );
        const data = await response.json();
        setColorName(data.name.value);
      } catch (error) {
        console.error("Error fetching color name:", error);
      }
    };

    fetchColorName();
  }, [color.value]);

  return (
    <div className="color-card" style={{ backgroundColor: color.value }}>
      <div className="color-info">
        <p className="color-name">{colorName}</p>
        <p className="color-hex">{color.value}</p>
        <p className="color-role">{color.role}</p>
      </div>
    </div>
  );
};

export default ColorCard;
