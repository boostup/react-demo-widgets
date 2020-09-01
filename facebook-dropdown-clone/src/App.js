import React from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <p style={{ padding: "1rem" }}>
        Click on the last button to try the multi-level dropdown menu.
      </p>
    </div>
  );
}
export default App;
