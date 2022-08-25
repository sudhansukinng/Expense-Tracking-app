import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses() {
  const expenses = [
    { Title: "Car loan", amount: 5643, date: new Date(2022, 8, 16) },
    { Title: "House loan", amount: 2343, date: new Date(2022, 8, 11) },
    { Title: "Food Bill", amount: 6511, date: new Date(2022, 8, 12) },
    { Title: "Travel Expense", amount: 643, date: new Date(2022, 8, 13) },
  ];

  return (
    <Card className="expenses">
      {expenses.map((item) => (
        <ExpenseItem title={item.Title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
}

export default Expenses;
