import React, { useState } from "react";

const EditForm = ({ theme, onEdit, onCancel }) => {
  const [editedTheme, setEditedTheme] = useState(theme);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTheme({
      ...editedTheme,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(editedTheme);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Theme</h3>
      <label>
        Title:
        <input
          type="text"
          name="name"
          value={editedTheme.name}
          onChange={handleChange}
        />
      </label>
      {/* Inputs for each color */}
      {editedTheme.colors.map((color, index) => (
        <label key={index}>
          {color.role}:
          <input
            type="color"
            name={`colors[${index}].value`}
            value={editedTheme.colors[index].value}
            onChange={handleChange}
          />
        </label>
      ))}
      <button type="submit">Save Changes</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditForm;
