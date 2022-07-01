import { ChangeEvent, useEffect, useState } from 'react';
import './ExpensesFilter.css';

export interface IExpenseFilter {
  date?: string
}

export interface IExpenseFilterHandler {
  filterHandler: (expenseFilter: IExpenseFilter) => void
}

const ExpenseFilter = ({ filterHandler }: IExpenseFilterHandler) => {

  const [expenseFilter, setExpenseFilter] = useState<IExpenseFilter>({
    date: "2022"
  });

  //ensures filterHandler is only called after state queue has finished processing
  useEffect(() => filterHandler(expenseFilter), [expenseFilter]);

  const setFilterValue =
    (key: keyof IExpenseFilter) => (event: ChangeEvent<HTMLSelectElement>) => {
      setExpenseFilter((prevState) => {
        return { ...prevState, [key]: event.target.value };
      });
    };

  //TODO this should use real numbers instead of strings
  //TODO also make the Options generate from the available years from the product list
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={expenseFilter.date} onChange={setFilterValue("date")}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;