import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [vlv, setVlv] = useState([]);

  const elm = (
    <div key={vlv.length}>
      <input type="text" />
      <button
        className="delete"
        type="submit"
        value={"Delete"}
        onClick={(eve) => eve.target.parentElement.remove()}
      >Delete</button>
    </div>
  );

  return (
    <div>
      <form
        onSubmit={(eve) => {
          eve.preventDefault();
        }}
      >
        {vlv.length > 0 ? (
          vlv.map((item, index) => <div key={index}>{item}</div>)
        ) : (
          <p>No fields in the form</p>
        )}
      </form>
      <button className="add" onClick={() => setVlv([...vlv, elm])}>
        Add Field
      </button>
    </div>
  );
};

export default App;
