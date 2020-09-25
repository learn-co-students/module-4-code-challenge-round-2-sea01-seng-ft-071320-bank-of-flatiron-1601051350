import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    search: "",
    date: "",
    description: "",
    category: "",
    amount: 0,
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

  AddTransactions = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.key]: e.target.value,
    });
  };

  render() {
    //console.log(this.state.search);
    const { transactions } = this.state;
    // this.filterTransactions();
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <AddTransactionForm AddTransactions={this.AddTransactions} />
        <TransactionsList transactions={this.filterTransactions()} />
      </div>
    );
  }
}

export default AccountContainer;
