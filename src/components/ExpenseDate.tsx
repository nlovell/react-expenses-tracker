export declare interface ExpenseDateObj {
  date: Date;
}

function ExpenseDate(obj: { date: Date }) {
  let month = obj.date.toLocaleString("en-US", { month: "long" });
  let day = obj.date.toLocaleString("en-US", { day: "numeric" });
  let year = obj.date.toLocaleString("en-US", { year: "numeric" });

  return (
    <div className="expense-item__date">
      <div className="expense-item__date__month">{month}</div>
      <div className="expense-item__date__day">{day}</div>
      <div className="expense-item__date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
