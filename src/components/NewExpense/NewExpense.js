import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = function (props) {
  const [isOpen, setIsOpen] = useState(false);

  const expenseDataHandler = function (enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const openFormHandler = function () {
    setIsOpen(true);
  };

  const closeFormHandler = function () {
    setIsOpen(false);
  };

  return (
    <div className="new-expense">
      {!isOpen && <button onClick={openFormHandler}>Add new expense</button>}
      {isOpen && (
        <ExpenseForm
          onSaveExpenseData={expenseDataHandler}
          onCancel={closeFormHandler}
        />
      )}
    </div>
  );

  //! Another solution for toggle form :
  // const toggleFormHandler = () => {
  //   setIsOpen(!isOpen);
  // };

  // return (
  //   <div className="new-expense">
  //     {//* using conditional rendering method, if isOpen state is true then renders ExpenseForm component, and pass the toggleFormHandler function to the ExpenseForm component and called in the form submit event and form reset event. */}

  //     {isOpen ? (
  //       <ExpenseForm
  //         onResetForm={toggleFormHandler}
  //         onSaveExpenseData={saveExpenseDataHandler}
  //       />
  //     ) : (
  //       <button onClick={toggleFormHandler}>Add New Expense</button>
  //     )}
  //   </div>
  // );
};

export default NewExpense;

//! Child-to-Parent commponent comminucation (Bottom-Up):
//? Is a pattern which we can create our own event props, if we wanna call it like, and we can expect functions as values and that would allow us to pass a function from a parent component to a child component and then call that function inside of the child component. And when we then call a function we can of course pass data to that function as a parameter and that's how we can communicate up from child to parent.
//? This is how you can communicate between components and how you can communicate up, how you can make sure that a child component, the "ExpenseForm" component here for example, can communicate up to the parent component,the "NewExpense" component in this case. We can call a function in the "NewExpense" component and we can pass data as a parameter. So here, when we call "onSaveExpenseData" in the "ExpenseForm", I can pass the "expenseData" which are generated here as our argument and that's the value which we'll receive as a parameter here in "NewExpense".

//! Lifting the state up :
//? it is about moving data from a child component to some parent component to either use it there or to then pass it down to some other child component. it's not always that root "App" component to which you wanna lift your state up. Instead, the goal is to lift it up just as high as necessary in your Component Tree until you have a component which has both access to the components that generate data as well as the components that needs data, that might be the "App" component, but that could also be another component.
