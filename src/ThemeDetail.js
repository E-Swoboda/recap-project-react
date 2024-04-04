import React from "react";

const ThemeDetail = ({ theme }) => {
  return (
    <div>
      <h2>{theme.name}</h2>
      <div className="color-cards">
        {theme.colors.map((color) => (
          <div key={color.role}>
            <p>{color.name}</p>
            <p>{color.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeDetail;
