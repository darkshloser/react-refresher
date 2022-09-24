import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense';

function App() {

  const addExpenseHandler = addedExpense => {
    const newExpense = {...addedExpense}
    console.log(newExpense)
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses />
    </div>
  );
}

export default App;