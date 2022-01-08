import React, { useState } from "react";
import axios from "axios";

function Input() {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5200/items", { title: item }).then((res) => {
      if (res.data.status) {
        alert("Item add successfully! ");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your Todo:
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Input;
