import React, { useState } from "react";
import EditForm from "./EditForm";

const ThemeDetail = ({ theme, onDelete, onEdit }) => {
  const [displayState, setDisplayState] = useState("display"); // Initial display state

  const toggleEdit = () => {
    setDisplayState(displayState === "display" ? "edit" : "display"); // Toggle between "edit" and "display" states
  };

  const handleEdit = (updatedTheme) => {
    onEdit(updatedTheme);
    setDisplayState("display");
  };

  return (
    <div>
      <h2>{theme.name}</h2>
      {displayState === "edit" ? (
        <EditForm theme={theme} onEdit={handleEdit} onCancel={toggleEdit} />
      ) : (
        <>
          <button onClick={toggleEdit}>Edit Theme</button>
          <button onClick={onDelete}>Delete Theme</button>
        </>
      )}
    </div>
  );
};

export default ThemeDetail;
