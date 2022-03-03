import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = function (props) {
  const expenseDataHandler = function (enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseDataHandler} />
    </div>
  );
};

export default NewExpense;

//! Child-to-Parent commponent comminucation (Bottom-Up):
//? Is a pattern which we can create our own event props, if we wanna call it like, and we can expect functions as values and that would allow us to pass a function from a parent component to a child component and then call that function inside of the child component. And when we then call a function we can of course pass data to that function as a parameter and that's how we can communicate up from child to parent.
//? This is how you can communicate between components and how you can communicate up, how you can make sure that a child component, the "ExpenseForm" component here for example, can communicate up to the parent component,the "NewExpense" component in this case. We can call a function in the "NewExpense" component and we can pass data as a parameter. So here, when we call "onSaveExpenseData" in the "ExpenseForm", I can pass the "expenseData" which are generated here as our argument and that's the value which we'll receive as a parameter here in "NewExpense".
