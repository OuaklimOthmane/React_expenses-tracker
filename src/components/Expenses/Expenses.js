import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = function (props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeFilteredYearHandler = (pickedYear) => {
    setFilteredYear(pickedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilteredYear={changeFilteredYearHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

//! the "key" prop :
//? Almost every React application displays an array list of some kind using the method map. And React tells us that for each element of that list that we return for rendering, we must provide a unique key prop.
//? Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.
//? When the state of your component changes, the render function will return a new tree of React elements, different to the previous/current one. React needs to figure out what are the differences to efficiently update the UI with the most recent changes. This process of matching both element trees is called "reconciliation". ==> This is why the "key" prop is needed, to solve this issue. When children have keys, React uses the key to match children in the old tree with children in the new tree.
