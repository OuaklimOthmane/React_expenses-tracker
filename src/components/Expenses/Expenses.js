import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = function (props) {
  const [filteredyear, setFilteredYear] = useState("2020");

  const changeFilteredYearHandler = (pickedYear) => {
    setFilteredYear(pickedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredyear}
        onChangeFilteredYear={changeFilteredYearHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
