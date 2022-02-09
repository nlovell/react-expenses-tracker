import Card from "./components/Card/Card";
import { IExpenseItem } from "./components/ExpenseItem/ExpenseItem";
import Expenses from "./components/ExpenseItem/Expenses";

import "./css/App.css";

function App() {
  let expenses: IExpenseItem[] = [
    { title: "Bass", cost: 349.99, date: new Date(2022, 1, 22) },
    { title: "Electric", cost: 249.99, date: new Date(2022, 2, 6) },
    { title: "Acoustic", cost: 449.99, date: new Date(2022, 5, 12) },
    { title: "Ukulele", cost: 149.99, date: new Date(2021, 1, 30) },
  ];

  return (
    <div className="App">
      <Card>
        <h2>Let's get cracking!</h2>
        <p>By writing some words and adding a component.</p>
      </Card>

      <Expenses items={expenses} />
    </div>
  );
}

export default App;
