import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";
import Search from "./Search";

const URL = ("http://localhost:6001/transactions")

class App extends Component {

    state = {
      transactions: [],
      search: ''
    }

  fetchTransactions = () => {
    fetch(URL)
    .then(res => res.json())
    .then(json => {
      this.setState({
        transactions: json,
      })
    })
  }

  componentDidMount() {
    this.fetchTransactions()
  }

  handleTransAdd = (e, trans) => {
    e.preventDefault()
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trans)
    })
    .then(res => res.json())
    .then(this.fetchTransactions())
  }  

  handleSearch = (e) => {
    // console.log(e.target.value)
    this.setState({
      search: e.target.value.toLowerCase()
    })
  }


  filterSearch = () => {
    return this.state.transactions.filter(t => {
      return t.description.toLowerCase().includes(this.state.search)
    })
  }
  
  render() {
    // console.log(this.state.transactions)
    this.filterSearch()
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions={this.filterSearch()} addTrans={this.handleTransAdd} handleSearch={this.handleSearch}/>
       
      </div>
    );
  }
}

export default App;
