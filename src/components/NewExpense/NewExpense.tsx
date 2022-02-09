import Card from "../UI/Card/Card";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  return (
    <Card className="new-expense">
      <h2>New Expense</h2>
      <ExpenseForm />
    </Card>
  );
};

export default NewExpense;
