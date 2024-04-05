import React, { useState } from "react";
import ThemeForm from "./ThemeForm";
import ColorCard from "./ColorCard";
import { themes as initialThemes } from "./db";
import ThemeDetail from "./ThemeDetail";
import ThemeTestPage from "./ThemeTestPage";
import "./App.css";
function App() {
  const [themes, setThemes] = useState(initialThemes);
  const [isTestPageOpen, setIsTestPageOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(null);

  const handleAddTheme = (newTheme) => {
    setThemes([newTheme, ...themes]);
  };

  const handleDeleteTheme = (id) => {
    setThemes(themes.filter((theme) => theme.id !== id));
  };

  const handleEditTheme = (editedTheme) => {
    setThemes(
      themes.map((theme) => (theme.id === editedTheme.id ? editedTheme : theme))
    );
  };

  const handleTryOut = (theme) => {
    setSelectedTheme(theme);
    setIsTestPageOpen(true);
  };

  const handleClosePreview = () => {
    setIsTestPageOpen(false);
    setSelectedTheme(null);
  };

  return (
    <>
      <header className="header">
        <h1>Theme Creator</h1>
      </header>
      <main className="main-container">
        {isTestPageOpen ? (
          <ThemeTestPage
            theme={selectedTheme}
            onClosePreview={handleClosePreview}
          />
        ) : (
          <>
            <ThemeForm onAddTheme={handleAddTheme} />
            <div className="theme-list">
              {themes.map((theme) => (
                <div key={theme.id}>
                  <ThemeDetail
                    theme={theme}
                    onDelete={() => handleDeleteTheme(theme.id)}
                    onEdit={handleEditTheme}
                    onTryOut={() => handleTryOut(theme)}
                  />
                  <ul className="color-list">
                    {theme.colors.map((color) => (
                      <li key={color.role}>
                        <ColorCard color={color} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
