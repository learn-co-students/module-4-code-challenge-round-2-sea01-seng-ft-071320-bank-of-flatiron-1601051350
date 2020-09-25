import React from "react";
import Transaction from "./Transaction";

export default function TransactionList({
  transactions,
  sortBy,
  setSortBy,
  delTransaction,
}) {
  function handleClick(event, name) {
    setSortBy(name);
  }

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th
            onClick={(event) => handleClick(event, "date")}
            className={`sortable ${sortBy === "date" ? "sorted" : null}`}
          >
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th
            onClick={(event) => handleClick(event, "description")}
            className={`sortable ${sortBy === "description" ? "sorted" : null}`}
          >
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th
            onClick={(event) => handleClick(event, "category")}
            className={`sortable ${sortBy === "category" ? "sorted" : null}`}
          >
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th
            onClick={(event) => handleClick(event, "amount")}
            className={`sortable ${sortBy === "amount" ? "sorted" : null}`}
          >
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            {...transaction}
            delTransaction={delTransaction}
          />
        ))}
      </tbody>
    </table>
  );
}
