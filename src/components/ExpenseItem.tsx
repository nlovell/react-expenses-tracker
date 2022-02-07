import "../css/ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>22/03/2022</div>
      <div className="expense-item__description">
        <h2>Ibanez BTB845 - Cerulean</h2>
        <div className="expense-item__price">£849</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
