import "../css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

export declare interface ItemData {
  date: Date;
  title: string;
  cost: number;
}

function ExpenseItem(data: ItemData) {
  const { date: foo } = data;
  return (
    <div className="expense-item">
      <ExpenseDate date={foo} />
      <div className="expense-item__description">
        <h2>{data.title}</h2>
        <div className="expense-item__price">£{data.cost}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
