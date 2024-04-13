// ExpenseList.jsx
import React from 'react';

function ExpenseList({ items, deleteItem }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.description}</td>
            <td>$ {item.amount}</td>
            <td>{item.category}</td>
            <td><button className='btn btn-outline-danger' onClick={() => deleteItem(item.id)}>Delete</button></td>
          </tr>
        ))}
        <tr>
          <td><h3>Total</h3></td>
          <td colSpan="3"><h3>$ {items.reduce((total, item) => total + parseInt(item.amount), 0)}</h3></td>
        </tr>
      </tbody>
    </table>
  );
}

export default ExpenseList;

