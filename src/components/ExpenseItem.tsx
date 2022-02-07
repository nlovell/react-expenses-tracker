import "../css/ExpenseItem.css";

export declare interface ItemData {
  date: Date;
  title: string;
  cost: number;
}
//export type ItemDataProp = ItemData[];

function ExpenseItem(data: ItemData) {
  return (
    <div className="expense-item">
      <div>{data.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{data.title}</h2>
        <div className="expense-item__price">£{data.cost}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
