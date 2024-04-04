import React, { useState } from "react";
import EditForm from "./EditForm";

const ThemeDetail = ({ theme, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <h2>{theme.name}</h2>
      {isEditing ? (
        <EditForm theme={theme} onEdit={onEdit} onCancel={toggleEdit} /> // Pass onEdit function
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
