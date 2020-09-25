import React, { useState } from "react";

export default function AddTransactionForm({ addTransaction }) {
  const [transaction, setTransaction] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  function handleChange(event) {
    setTransaction({
      ...transaction,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTransaction(transaction);
  }

  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          <input
            onChange={handleChange}
            type="date"
            name="date"
            value={transaction.date}
          />
          <input
            required
            onChange={handleChange}
            type="text"
            name="description"
            placeholder="Description"
            value={transaction.description}
          />
          <input
            required
            onChange={handleChange}
            type="text"
            name="category"
            placeholder="Category"
            value={transaction.category}
          />
          <input
            required
            onChange={handleChange}
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={transaction.value}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}
