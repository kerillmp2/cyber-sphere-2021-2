import './styles/App.css';
import React from "react";
import DBConnection from "./features/DBConnection";

function App() {
  return (
    <div className="App">
      <DBConnection/>
    </div>
  );
}

export default App;
