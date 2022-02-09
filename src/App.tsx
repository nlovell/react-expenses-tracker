import { IExpenseItem } from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card/Card";
import "./css/App.css";

const App = () => {
  let expenses: IExpenseItem[] = [
    { title: "Bass", cost: 349.99, date: new Date(2022, 1, 22) },
    { title: "Electric", cost: 249.99, date: new Date(2022, 2, 6) },
    { title: "Acoustic", cost: 449.99, date: new Date(2022, 5, 12) },
    { title: "Ukulele", cost: 149.99, date: new Date(2021, 1, 30) },
  ];

  return (
    <div className="App">
      <Card>
        <h2>Expense Tracker</h2>
        <p>Keep tabs on your spending with this simple React app.</p>
      </Card>

      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
