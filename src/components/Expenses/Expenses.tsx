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
    <Card>
      <h2>Expense Filters</h2>
      <ExpenseFilter filterHandler={submitExpensesFilterHandler} />
      <div>
        <h2>Logged Expenses</h2>

        {filteredItems.items.map(({ date, title, cost }) => (
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
