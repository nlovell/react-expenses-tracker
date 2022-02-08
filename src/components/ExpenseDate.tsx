import { VFC } from "react";

interface IExpenseDate {
  date: Date;
  notADate?: string;
}

/**
 * Component for displaying Expense Dates
 *
 * @param date an ExpenseDateData object
 * @returns the expense date JSX
 */
const ExpenseDate: VFC<IExpenseDate> = ({ date, notADate = "default" }) => {
  let month = date.toLocaleString("en-US", { month: "long" });
  let day = date.toLocaleString("en-US", { day: "numeric" });
  let year = date.toLocaleString("en-US", { year: "numeric" });

  return (
    <div className="expense-item__date">
      <div className="expense-item__date__month">{month}</div>
      <div className="expense-item__date__day">{day}</div>
      <div className="expense-item__date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
