import { VFC } from "react";
import Card from "../UI/Card/Card";
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
      <div>
        <h2>Logged Expenses</h2>

        {items.map(({ date, title, cost }) => (
          <ExpenseItem
            key={title + date}
            date={date}
            title={title}
            cost={cost}
          />
        ))}
      </div>
    </Card>
  );
};

export default Expenses;
