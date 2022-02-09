import { VFC } from "react";
import Card from "../Card/Card";
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
    <Card>
      {items.map(({ date, title, cost }) => (
        <ExpenseItem key={title + date} date={date} title={title} cost={cost} />
      ))}
    </Card>
  );
};

export default Expenses;
