import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";

const ExpenceItem = function (props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenceItem;

//! useState() hook :
//? Hook provided by React library allows us to define values as states where changes to these values should reflect in the component function being called again.So why does work like that?? and why do we have this state updating function instead of assigning a new value by equal signs?? therefore the reason for that does not just assign a new value to some variables, but instead it is a special variable to begin with,and it's managed by React somewhere in the memory, and when we call this state updating function, this special variable will not just receive a new valueb but the component function in which we called this state updating function and which we initialized our state with "useState" will be executed again, because by calling this function we're telling React that the component in which this state was registered with 'useState' should be re-evaluated, and therefore React will go ahead and executes this component function again, and therefore also evaluates the returned JSX code again, and then will draw any changes which it detects compared to the last tie it evaluated on the screen.
//? The state is really seperated on a per component instance basis, so if we update a state on a specifique instance,that last will only being re-evaluated and others will not be effected by the state change.
//? Synatx : const [state, setState] = useState(initialState)
