// App.jsx
import React, { useState, useEffect } from 'react';
import ExpenseList from './component/ExpenseList';
import ExpenseFilter from './component/ExpenseFilter';
import ExpenseForm from './component/ExpenseForm';
import { set } from 'react-hook-form';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "2 pack of sugar", amount: 1300, category: "groceries" },
    { id: 2, description: "2 makeup kits", amount: 2500, category: "beauty products" },
    { id: 3, description: "1 lipstick", amount: 800, category: "beauty products" },
    { id: 4, description: "2 pack of flour", amount: 2000, category: "groceries" },
    { id: 5, description: "5 litres of milk", amount: 1500, category: "groceries" },
    { id: 6, description: "Rent", amount: 7200, category: "utilities" },
    { id: 7, description: "Electricity Bill", amount: 3000, category: "utilities" }
  ]);

  const addItem = (data)=>{
    setExpenses(()=>
    [...expenses, data]
)
  }

  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const deleteItem = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
    setFilteredExpenses(filteredExpenses.filter(expense => expense.id !== id));
  };

  const filterItem = (cat) => {
    if (cat === "") {
      // Reset filter, show all expenses
      setFilteredExpenses(expenses);
    } else {
      // Filter expenses based on category
      setFilteredExpenses(expenses.filter(expense => expense.category === cat));
    }
  };

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  return (
    <>
      <ExpenseForm addExpense ={ addItem}/>
      <ExpenseFilter filterItem={filterItem} />
      <ExpenseList items={filteredExpenses} deleteItem={deleteItem} />
    </>
  );
}

export default App;

