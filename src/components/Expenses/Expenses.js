import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const onFilterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredItems = props.items.filter((item) => {
    if (item.date.getFullYear().toString() === selectedYear) return true;
    return false;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        filterChangeHandler={onFilterChangeHandler}
      />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList filteredItems={filteredItems} />
    </Card>
  );
}

export default Expenses;
