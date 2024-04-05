import React, { useState } from "react";

const EditForm = ({ theme, onEdit, onCancel }) => {
  const [editedTheme, setEditedTheme] = useState(theme);

  const handleInputChange = (event, colorRole) => {
    const { value } = event.target;

    setEditedTheme({
      ...editedTheme,
      colors: editedTheme.colors.map((color) =>
        color.role === colorRole ? { ...color, value: value } : color
      ),
    });
  };

  const handleNameChange = (event) => {
    const { value } = event.target;

    setEditedTheme({
      ...editedTheme,
      name: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onEdit(editedTheme);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Theme Name:
        <input
          type="text"
          value={editedTheme.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Primary Color:
        <input
          type="color"
          value={
            editedTheme.colors.find((color) => color.role === "primary").value
          }
          onChange={(event) => handleInputChange(event, "primary")}
        />
      </label>
      <label>
        Secondary Color:
        <input
          type="color"
          value={
            editedTheme.colors.find((color) => color.role === "secondary").value
          }
          onChange={(event) => handleInputChange(event, "secondary")}
        />
      </label>
      <label>
        Surface Color:
        <input
          type="color"
          value={
            editedTheme.colors.find((color) => color.role === "surface").value
          }
          onChange={(event) => handleInputChange(event, "surface")}
        />
      </label>
      <label>
        Surface-On Color:
        <input
          type="color"
          value={
            editedTheme.colors.find((color) => color.role === "surface-on")
              .value
          }
          onChange={(event) => handleInputChange(event, "surface-on")}
        />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditForm;
