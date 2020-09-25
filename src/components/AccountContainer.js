import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    search: "",
  };

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
      .then((resp) => resp.json())
      .then((transactions) => this.setState({ transactions }));
  }

  handleSearch = (e) => {
    //console.log(e.target.value);
    this.setState({ search: e.target.value });
  };

  filterTransactions = () => {
    return this.state.transactions.filter((t) => {
      return t.description.toLowerCase().includes(this.state.search);
    });
    //console.log(transactions);
  };

  render() {
    //console.log(this.state.search);
    const { transactions } = this.state;
    // this.filterTransactions();
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <AddTransactionForm />
        <TransactionsList transactions={this.filterTransactions()} />
      </div>
    );
  }
}

export default AccountContainer;
