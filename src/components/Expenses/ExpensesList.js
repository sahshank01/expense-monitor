import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.filteredItems.length === 0)
    return <h2 className="expenses-list__fallback">No expense found.</h2>;

  return (
    <ul className="expenses-list">
      {props.filteredItems.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
