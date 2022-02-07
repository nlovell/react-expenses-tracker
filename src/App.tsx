import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import { ItemData } from "./components/ExpenseItem";
import "./css/App.css";

function App() {
  let expenses: ItemData[] = [
    { title: "Bass", cost: 349.99, date: new Date(2022, 1, 22) },
    { title: "Electric", cost: 249.99, date: new Date(2022, 2, 6) },
    { title: "Acoustic", cost: 449.99, date: new Date(2022, 5, 12) },
    { title: "Ukulele", cost: 149.99, date: new Date(2021, 1, 30) },
  ];

  return (
    <div className="App">
      <h2>Let's get cracking!</h2>
      <p>By writing some words and adding a component.</p>

      <ExpenseItem {...expenses[0]} />
      <ExpenseItem {...expenses[1]} />
      <ExpenseItem {...expenses[2]} />
      <ExpenseItem {...expenses[3]} />
    </div>
  );
}

export default App;
