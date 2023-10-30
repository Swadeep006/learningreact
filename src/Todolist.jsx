import { useState } from "react";
import React from "react";
import "./todolist.css";

export default function Todolist() {
  const [name, setname] = useState("");
  const [data, setdata] = useState([]);
  let next = 0;
  return (
    <div className="card">
      <h1>TodoList</h1>
      <div>
        <input value={name} placeholder="Type here" onChange={(e) => setname(e.target.value)}/>
        <button className="git" onClick={() => {setdata([...data, { id: next++, name: name }]);}}>Add</button>
        <ul>
          {data.map((data) => {
            return <li key={data.id}>{data.name}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}
