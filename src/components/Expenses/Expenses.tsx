import { useState, VFC } from "react";
import ExpenseFilter, { IExpenseFilter } from "./ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card/Card";
import ExpenseItem, { IExpenseItem } from "./ExpenseItem";
import ExpensesList from "./ExpensesList";

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

  const [expenseItems, setExpenseItems] = useState<IExpenseItems>({ items });
  const [filteredItems, setFilteredExpenseItems] = useState<IExpenseItems>({ items });

  let expensesFilter: IExpenseFilter;

  const submitExpensesFilterHandler = (submittedFilter: IExpenseFilter) => {
    expensesFilter = {
      ...expensesFilter,
      ...submittedFilter
    };

    //Todo: Make this a function with more flexibility
    const newItems: IExpenseItems = { items };
    newItems.items = items.filter((item) =>
      item.date.getFullYear().toString() == expensesFilter.date);

    setFilteredExpenseItems(newItems);
  };

  return (
    <li><Card>
      <h2>Expense Filters</h2>
      <ExpenseFilter filterHandler={submitExpensesFilterHandler} />
      <div>
        <h2>Logged Expenses</h2>

        <ExpensesList items={filteredItems.items} />
      </div>
    </Card>
    </li>
  );
};

export default Expenses;
