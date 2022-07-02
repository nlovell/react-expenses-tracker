import React from 'react';
import ExpenseItem, { IExpenseItem } from "./ExpenseItem";
import { IExpenseItems } from './Expenses';


const ExpensesList = ({ items }: IExpenseItems) => {


    if (items.length === 0) {
        return <h2 className="expenses-list__fallback">No items found for the selected filter.</h2>
    }
    else {
        return <ul className="expenses-list"> {(items.map(({ date, title, cost }) => (
            <ExpenseItem
                key={title + date}
                date={date}
                title={title}
                cost={cost}
            />)
        ))}
        </ul>
    }
}

export default ExpensesList;