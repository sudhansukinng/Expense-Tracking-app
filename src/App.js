import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const AddnewExpense = expense => {
  const NewExpense = {
    ...expense
  }

  console.log("In App.js");
  console.log(NewExpense);
}

function App() {
  return (
    <div>
      <NewExpense onAddNewExpense={AddnewExpense}/>
      <Expenses  ></Expenses>
    </div>
  );
}

export default App;
