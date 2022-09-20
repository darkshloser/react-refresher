import "./ExpenseItem.css";
import ExposeDate from './ExpenseDate';

function ExpenseItem(props) {
  return (
    <div className="expense-item">
        <ExposeDate date={props.date} />
        <div className="exponse-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>
    </div>
  );
}

export default ExpenseItem;
