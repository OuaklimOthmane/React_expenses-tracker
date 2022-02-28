import "./ExpenseItem.css";

const ExpenceItem = function (props) {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenceItem;
