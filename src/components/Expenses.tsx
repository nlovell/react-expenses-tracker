import { VFC } from "react";
import ExpenseItem, { IExpenseItem } from "./ExpenseItem";

interface IExpenseItems {
  items: readonly IExpenseItem[];
}

/**
 *  Component for displaying multiple Expense objects
 *
 * @param items
 * @returns a collection of Expense Items JSX
 */
const Expenses: VFC<IExpenseItems> = ({ items }) => {
  return (
    <div className="expense-items">
      {items.map(({ date, title, cost }) => (
        <ExpenseItem key={title + date} date={date} title={title} cost={cost} />
      ))}
    </div>
  );
};

export default Expenses;
