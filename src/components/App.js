import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [vlv, setVlv] = useState([]);
  let elm = (
    <div key={vlv.length}>
      <input type="text" />
      <input
        className="delete"
        type="submit"
        value={"Delete"}
        onClick={(eve) => eve.target.parentElement.remove()}
      />
    </div>
  );
  return (
    <div>
      <form
        onSubmit={(eve) => {
          eve.preventDefault();
        }}
      >
        {vlv.length > 0 ? vlv.map((item) => item) : <p>Add Field</p>}
      </form>
      <button className="add" onClick={() => setVlv([...vlv, elm])}>
        Click
      </button>
    </div>
  );
};

export default App;

// agar aapko useState ki old value bhi nhi khoni aur new values bhi add karni hai to apko ... spread oprator use krna padega like this {}, [] depend kr ta hai aap kunsa type de rhe hai hai so aapko usi hisaab sai brackets use kr ne padega useState([...vlv, <>New Value<>]) or useState({...vlv, <>New Value<>})
