import React, { useState } from "react";

function ThemeForm({ onAddTheme }) {
  const [title, setTitle] = useState("");
  const [color1, setColor1] = useState("#000000");
  const [color2, setColor2] = useState("#000000");
  const [color3, setColor3] = useState("#000000");
  const [color4, setColor4] = useState("#000000");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) return;
    const newTheme = {
      name: title,
      colors: [
        { role: "primary", value: color1 },
        { role: "secondary", value: color2 },
        { role: "surface", value: color3 },
        { role: "surface-on", value: color4 },
      ],
    };
    onAddTheme(newTheme);
    setTitle("");
    setColor1("#000000");
    setColor2("#000000");
    setColor3("#000000");
    setColor4("#000000");
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
      <label>
        <h4>Variant 1:</h4>
        <input
          type="color"
          value={color1}
          onChange={(e) => setColor1(e.target.value)}
        />
      </label>
      <label>
        <h4>Variant 2:</h4>
        <input
          type="color"
          value={color2}
          onChange={(e) => setColor2(e.target.value)}
        />
      </label>
      <label>
        <h4>Variant 3:</h4>
        <input
          type="color"
          value={color3}
          onChange={(e) => setColor3(e.target.value)}
        />
      </label>
      <label>
        <h4>Variant 4:</h4>
        <input
          type="color"
          value={color4}
          onChange={(e) => setColor4(e.target.value)}
        />
        <br></br>
      </label>
      <button type="submit">
        <h4>Add Theme</h4>
      </button>
    </form>
  );
}

export default ThemeForm;
