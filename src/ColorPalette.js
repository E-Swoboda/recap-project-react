import React from "react";
import ColorCard from "./ColorCard";
import { themes } from "./themes";

const ColorPalette = () => {
  return (
    <div className="color-palette">
      {themes.map((theme) => (
        <div key={theme.id}>
          <h2>{theme.name}</h2>
          <div className="color-cards">
            {theme.colors.map((color) => (
              <ColorCard key={color.role} color={color} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
