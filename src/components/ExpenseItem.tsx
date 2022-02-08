import "../css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { VFC } from "react";

export interface IExpenseItem {
  date: Date;
  title: string;
  cost: number;
}

/**
 * Component for displaying complete Expense objects
 *
 * @param data an ExpenseItemData object
 * @returns the expense item JSX
 */
const ExpenseItem: VFC<IExpenseItem> = ({ date, title, cost }) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{cost}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
