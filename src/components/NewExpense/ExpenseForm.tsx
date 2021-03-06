import { Method } from "@testing-library/react";
import { ChangeEvent, FormEvent, MouseEventHandler, useState } from "react";
import { IExpenseItem } from "../Expenses/ExpenseItem";
import "./NewExpense.css";

interface IExpenseForm {
  title: string;
  cost: string;
  date: string;
}

type TExpenseClickHandler = (enteredExpenseData: IExpenseItem) => void;

interface INewExpense {
  saveHandler: TExpenseClickHandler;
  editHandler: any;
}

// name : (vars : types [, ...]) => return,

/**
 * Generates Expense Form
 * @param saveHandler
 * @returns form JSX
 */
const ExpenseForm = ({ saveHandler, editHandler }: INewExpense) => {
  const [userInput, setUserInput] = useState<IExpenseForm>({
    title: "",
    cost: "",
    date: "",
  });

  const createChangeHandler =
    (key: keyof IExpenseForm) => (event: ChangeEvent<HTMLInputElement>) => {
      setUserInput((prevState) => {
        return { ...prevState, [key]: event.target.value };
      });
    };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const expenseData: IExpenseItem = {
      title: userInput.title,
      cost: +userInput.cost,
      date: new Date(userInput.date),
    };

    saveHandler(expenseData);

    setUserInput({
      title: "",
      cost: "",
      date: "",
    });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={userInput.title}
              onChange={createChangeHandler("title")}
            />
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={userInput.cost}
              onChange={createChangeHandler("cost")}
            />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={userInput.date}
              onChange={createChangeHandler("date")}
            />
          </div>
        </div>
        <div>
          <button className="new-expense__actions" type="button" onClick={editHandler}>Cancel</button>

          <button className="new-expense__actions" type="submit">
            Add Expense
          </button>
        </div>
      </form>
    </>
  );
};
export default ExpenseForm;
