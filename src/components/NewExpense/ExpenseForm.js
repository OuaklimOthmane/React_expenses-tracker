import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = function () {
  //* Appproch "1" :
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");

  //* Approch "2","3" :
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    //* Approch 1 :
    // setEnteredTitle(event.target.value);

    //* Approch 2 :
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //* Approch 3 :
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

//! Now why should we should apply the approch "3" instead of "2" ??
//? In many cases, both will work fine,but keep in mind that Reacts schedules state updates,it doesn't perform them instantly. And therefore, theoretically, if you schedule a lot of state updates at the same time, you could be depending on an outdated or incorrect state snapshot if you use the approach "2".If you use this approach "3", React will guarantee that the state snapshot it gives you in this inner function, will always be the latest state snapshot, keeping all scheduled state updates in mind. So this is the safer way to ensure that you always operate on the latest state snapshot.So you should use the function syntax whenever your state update depends on the previous state.That is something you should memorize.If your state update depends on the previous state,use this function form.
