import { useState } from "react";
import { IExpenseItem } from "../Expenses/ExpenseItem";
import Card from "../UI/Card/Card";
import ExpenseForm from "./ExpenseForm";

type TExpenseHandler = (expense: IExpenseItem) => void;


interface IExpenseHandler {
  onAddExpenseHandler: TExpenseHandler;
}

const NewExpense = ({
  onAddExpenseHandler: expenseHandler,
}: IExpenseHandler) => {
  const saveExpenseDataHandler = (enteredExpenseData: IExpenseItem) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);
    expenseHandler(expenseData);
    setEditMode(false);
  };

  const [editMode, setEditMode] = useState(false);

  const editHandler = () => {
    setEditMode(!editMode);
    console.log(editMode);
  }

  return (
    <Card className="new-expense">
      <h2>New Expense</h2>
      {editMode ?
        <ExpenseForm
          saveHandler={saveExpenseDataHandler}
          editHandler={editHandler}
        />
        :
        <button className="new-expense__actions" onClick={editHandler}>Add New Expense</button>
      }

    </Card>
  );
};

export default NewExpense;
