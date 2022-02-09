import { useState, VFC } from "react";
import Card from "../UI/Card/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export interface IExpenseItem {
  date: Date;
  title: string;
  cost: number;
}

/**
 * Component for displaying single Expense objects
 *
 * @param data an ExpenseItemData object
 * @returns the expense item JSX
 */
const ExpenseItem: VFC<IExpenseItem> = ({ date, title, cost }) => {
  const [expenseTitle, setExpenseTitle] = useState(title);
  console.log("Item Evaluated by React");

  const clickHandler = () => {
    console.log("Clicked.");
    setExpenseTitle("Clicked");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price" onClick={clickHandler}>
          £{cost}
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
