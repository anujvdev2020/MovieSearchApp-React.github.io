import React, { useEffect, useState } from "react";
import "./App.css";
import SearchComponent from "./SearchComponent";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>

      <SearchComponent />
    </div>
  );
};

export default App;
