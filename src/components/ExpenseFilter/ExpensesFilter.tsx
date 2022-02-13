import { ChangeEvent, useState } from 'react';
import './ExpensesFilter.css';

export interface IExpenseFilter {
    date?: string
}

export interface IExpenseFilterHandler {
  filterHandler: (expenseFilter: IExpenseFilter) => void
}
const ExpenseFilter = ({filterHandler} : IExpenseFilterHandler) => {

    const [expenseFilter, setExpenseFilter] = useState<IExpenseFilter>({
        date: "2022",
    });

   const onFilterByDateHandler =
    (key: keyof IExpenseFilter) => (event: ChangeEvent<HTMLSelectElement>) => {
      setExpenseFilter((prevState) => {
        return { ...prevState, [key]: event.target.value };
      });

      filterHandler(expenseFilter);
    };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={expenseFilter.date} onChange={onFilterByDateHandler("date")}>
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