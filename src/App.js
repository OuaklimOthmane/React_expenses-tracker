import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initial_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initial_expenses);

  const addExpense = function (enteredExpense) {
    const expense = {
      ...enteredExpense,
    };

    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses items={expenses} />
    </div>
  );

  //? We recommend using JSX to describe what your UI should looks like. Each JSX element is just syntactic sugar for calling React.createElement(). You will not typically invoke the following methods directly if you are using JSX.
  //? React.createElement(component, props, ...children) = React.createElement(component,  {attributeKey : attributeValue}, content)
  //? It should also be clear why you need some wrapping element as a root JSX element. because in "createElement()" world, you always create one element which then may have more child elements.
  //? below we describe how we can build components without JSX :

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Let\'s get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
}

export default App;
