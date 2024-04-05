import React from "react";

const ThemeTestPage = ({ theme, onClosePreview }) => {
  return (
    <div
      className="test-page-container"
      style={{ "--primary-color": theme.colors[0].value }}
    >
      {/* UI elements styled using theme colors */}
      <h1>{theme.name} Theme Test Page</h1>
      <p style={{ color: theme.colors[1].value }}>
        Paragraph styled with secondary color
      </p>
      {/* Add more UI elements styled using theme colors */}
      <button onClick={onClosePreview}>Close Preview</button>
    </div>
  );
};

export default ThemeTestPage;
