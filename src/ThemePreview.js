import React from "react";

const ThemePreview = ({ theme }) => {
  return (
    <div>
      <h2>{theme.name}</h2>
      <div className="color-cards">
        {theme.colors.map((color) => (
          <div key={color.role}>
            <div
              style={{
                backgroundColor: color.value,
                width: "20px",
                height: "20px",
                display: "inline-block",
                marginRight: "5px",
              }}
            ></div>
            <span>{color.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemePreview;
