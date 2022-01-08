import React, { useState, useEffect } from "react";
import axios from "axios";
import Pusher from "pusher-js";

function Todos() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5200/items").then((res) => {
      if (res.data.tasks.length > items.length) {
        setItems(res.data.tasks);
      }
    });
  });
  const socket = new Pusher("9ae3c3783da8cca363d7", {
    cluster: "us2",
  });
  const channel = socket.subscribe("todo");
  channel.bind("items", (data) => {
    setItems([items, data]);
  });
  const fill = items.map((task) => {
    return <li>{task.text}</li>;
  });

  return <ul>{fill}</ul>;
}

export default Todos;
