import React from "react";
import Theme from "./Theme";
import { themes } from "./db";

const ColorPalette = () => {
  return (
    <div className="color-palette">
      {themes.map((theme) => (
        <div key={theme.id}>
          <Theme theme={theme} />
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
