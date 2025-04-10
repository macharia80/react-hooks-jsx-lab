import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return (
    <div>
      <h1>{name}</h1>
      <p>{city}</p>
    </div>
  );
}

export default Home;
