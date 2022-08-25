import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm(props) {
  const [orgTitle, setTitle] = useState("");
  const [orgDate, setDate] = useState("");
  const [orgAmount, setAmount] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const TitleHandler = (event) => {
    // 1.
    setTitle(event.target.value);
    //  2. setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    //3
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const DateHandler = (event) => {
    setDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const AmountHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const formHandler = (e) => {
    e.preventDefault();

    // console.log("clicked");

    const expenseData = {
      Title: orgTitle,
      ammout: orgAmount,
      date: new Date(orgDate),
    };

    props.onSaveExpenseData(expenseData);

    // console.log(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={formHandler}>
      <div className="new-expense__controls">
        <label className="new-expense__control">Title</label>
        <input type="text" value={orgTitle} onChange={TitleHandler}></input>
      </div>
      <div className="new-expense__controls">
        <label className="new-expense__control">Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={orgAmount}
          onChange={AmountHandler}
        ></input>
      </div>
      <div className="new-expense__controls">
        <label className="new-expense__control">Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={orgDate}
          onChange={DateHandler}
        ></input>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
