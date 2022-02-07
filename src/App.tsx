import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <h2>Let's get cracking!</h2>
      <p>By writing some words and adding a component.</p>
      <ExpenseItem />
    </div>
  );
}

export default App;
