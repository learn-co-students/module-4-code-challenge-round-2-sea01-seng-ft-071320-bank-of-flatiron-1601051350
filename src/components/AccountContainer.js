import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

import { sortArray, sortByKey } from "../utils/arrays";

const ENDPOINT = "http://localhost:6001/transactions",
  postObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

export default function AccountContainer() {
  const [transactions, setTransactions] = useState([]),
    [search, setSearch] = useState(""),
    [sortBy, setSortBy] = useState("date");

  useEffect(() => {
    fetch(ENDPOINT)
      .then((resp) => resp.json())
      .then((transactions) => setTransactions(transactions));
  }, []);

  function addTransaction(transaction) {
    fetch(ENDPOINT, {
      ...postObj,
      body: JSON.stringify({ ...transaction, amount: +transaction.amount }),
    })
      .then((resp) => resp.json())
      .then((transaction) => setTransactions([...transactions, transaction]));
  }

  function delTransaction(id) {
    fetch(`${ENDPOINT}/${id}`, { method: "DELETE" });
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  }

  function parseTransactions() {
    return sortArray(transactions, (a, b) =>
      sortByKey(a, b, sortBy)
    ).filter((transaction) => transaction.description.includes(search));
  }

  return (
    <div>
      <Search setSearch={setSearch} />
      <AddTransactionForm addTransaction={addTransaction} />
      <TransactionsList
        transactions={parseTransactions()}
        sortBy={sortBy}
        setSortBy={setSortBy}
        delTransaction={delTransaction}
      />
    </div>
  );
}
