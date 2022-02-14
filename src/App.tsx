import { useState } from "react";
import { IExpenseItem } from "./components/Expenses/ExpenseItem";
import Expenses, {IExpenseItems} from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/UI/Card/Card";
import "./css/App.css";

const DUMMY_DATA: IExpenseItem[] = [
  { title: "Bass", cost: 349.99, date: new Date(2022, 1, 22) },
  { title: "Electric", cost: 249.99, date: new Date(2022, 2, 6) },
  { title: "Acoustic", cost: 449.99, date: new Date(2022, 5, 12) },
  { title: "Ukulele", cost: 149.99, date: new Date(2021, 1, 30) },
];

const App = () => {
  
  const [expenses, setExpenses] = useState<IExpenseItems>({items:DUMMY_DATA});

  const addExpenseHandler = (expense: IExpenseItem) => {
setExpenses(prevExpenses => {return {
  items: [...prevExpenses.items, expense]}});    
console.log(expenses);
  };

  return (
    <div className="App">
      <Card>
        <h2>Expense Tracker</h2>
        <p>Keep tabs on your spending with this simple React app.</p>
      </Card>

      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      
      <Expenses items={expenses.items} />
    </div>
  );
};

export default App;
