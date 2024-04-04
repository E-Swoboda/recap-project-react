import React, { useState } from "react";
import ThemePreview from "./ThemePreview";
import ThemeDetail from "./ThemeDetail";

const Theme = ({ theme }) => {
  const [isPreview, setIsPreview] = useState(true);

  const toggleView = () => {
    setIsPreview(!isPreview);
  };

  return (
    <div>
      {isPreview ? (
        <ThemePreview theme={theme} />
      ) : (
        <ThemeDetail theme={theme} />
      )}
      <button onClick={toggleView}>
        {isPreview ? "Show Detail" : "Show Preview"}
      </button>
    </div>
  );
};

export default Theme;
