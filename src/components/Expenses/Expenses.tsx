import { useState, VFC } from "react";
import ExpenseFilter, { IExpenseFilter } from "./ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card/Card";
import ExpenseItem, { IExpenseItem } from "./ExpenseItem";

export interface IExpenseItems {
  items: readonly IExpenseItem[];
}

/**
 *  Component for displaying multiple Expense objects
 *
 * @param items
 * @returns a collection of Expense Items JSX
 */
const Expenses: VFC<IExpenseItems> = ({ items }) => {

  const [expenseItems, setExpenseItems] = useState<IExpenseItems>({items});

  let expensesFilter: IExpenseFilter;
  const submitExpensesFilterHandler = (submittedFilter : IExpenseFilter) => {
    expensesFilter = {
      ...expensesFilter,
      ...submittedFilter
    };
    console.log(submittedFilter.date + " from Expenses.tsx");
  };
  return (
    <Card>
      <h2>Expense Filters</h2>
      <ExpenseFilter filterHandler={submitExpensesFilterHandler}/>
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
