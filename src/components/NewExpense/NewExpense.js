import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const expenseDataHandler = (enteredExpenseData) => {
    const expense = {
      ...enteredExpenseData,
    };

    console.log("In New Expense.");
    console.log(expense);
    props.onAddNewExpense(expense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseDataHandler} />
    </div>
  );
}

export default NewExpense;
