import { IExpenseItem } from "../Expenses/ExpenseItem";
import Card from "../UI/Card/Card";
import ExpenseForm from "./ExpenseForm";

type TExpenseHandler = (expense: IExpenseItem) => void;

interface IExpenseHandler {
  expenseHandler: TExpenseHandler;
}

const NewExpense = ({ expenseHandler }: IExpenseHandler) => {
  const saveExpenseDataHandler = (enteredExpenseData: IExpenseItem) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);
    expenseHandler(expenseData);
  };

  return (
    <Card className="new-expense">
      <h2>New Expense</h2>
      <ExpenseForm saveHandler={saveExpenseDataHandler} />
    </Card>
  );
};

export default NewExpense;
