// ExpenseFilter.jsx
import React from 'react';

function ExpenseFilter({ filterItem }) {
  return (
    <select name="" id="" className="form-select mb-3" onChange={(event) => filterItem(event.target.value)}>
      <option value="">All</option>
      <option value="utilities">Utilities</option>
      <option value="beauty products">Beauty Products</option>
      <option value="groceries">Groceries</option>
      {/* Add other categories as needed */}
    </select>
  );
}

export default ExpenseFilter;
