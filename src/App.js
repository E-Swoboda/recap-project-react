import React, { useState } from "react";
import ThemeForm from "./ThemeForm";
import ColorCard from "./ColorCard";
import { themes as initialThemes } from "./db";

function App() {
  const [themes, setThemes] = useState(initialThemes);

  const handleAddTheme = (newTheme) => {
    setThemes([newTheme, ...themes]);
  };

  const handleDeleteTheme = (id) => {
    setThemes(themes.filter((theme) => theme.id !== id));
  };

  return (
    <>
      <header className="header">
        <h1>Theme Creator</h1>
      </header>
      <main className="main-container">
        <ThemeForm onAddTheme={handleAddTheme} />
        <div className="theme-list">
          {themes.map((theme) => (
            <div key={theme.id}>
              <h2>{theme.name}</h2>
              <ul className="color-list">
                {theme.colors.map((color) => (
                  <li key={color.role}>
                    <ColorCard color={color} />
                  </li>
                ))}
              </ul>
              <button onClick={() => handleDeleteTheme(theme.id)}>
                Delete Theme
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
