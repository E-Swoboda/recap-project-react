import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import "./App.css";
function ThemeForm({ onAddTheme }) {
  const [title, setTitle] = useState("");
  const [colors, setColors] = useState([
    { role: "primary", value: "#000000" },
    { role: "secondary", value: "#000000" },
    { role: "surface", value: "#000000" },
    { role: "surface-on", value: "#000000" },
  ]);

  const handleColorChange = (role, value) => {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.role === role ? { ...color, value } : color
      )
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) return;
    const newTheme = {
      name: title,
      colors,
    };
    onAddTheme(newTheme);
    setTitle("");
    setColors([
      { role: "primary", value: "#000000" },
      { role: "secondary", value: "#000000" },
      { role: "surface", value: "#000000" },
      { role: "surface-on", value: "#000000" },
    ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h2>Color Name</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      {colors.map((color) => (
        <ColorPicker
          key={color.role}
          color={color}
          onColorChange={handleColorChange}
        />
      ))}
      <button type="submit">
        <h4>Add Theme</h4>
      </button>
    </form>
  );
}

export default ThemeForm;
