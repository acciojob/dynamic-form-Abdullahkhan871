import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [fields, setFields] = useState([]); // Store field data, not JSX

  // Add a new field
  const addField = () => {
    setFields([...fields, { id: fields.length, value: "" }]); // Add a field with an ID and empty value
  };

  // Remove a field
  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  return (
    <div>
      <form
        onSubmit={(eve) => {
          eve.preventDefault();
        }}
      >
        {fields.length > 0 ? (
          fields.map((field) => (
            <div key={field.id}>
              <input type="text" />
              <button
                className="delete"
                type="button"
                onClick={() => removeField(field.id)} // Remove by ID
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No fields in the form</p>
        )}
      </form>
      <button className="add" onClick={addField}>
        Add Field
      </button>
    </div>
  );
};

export default App;
