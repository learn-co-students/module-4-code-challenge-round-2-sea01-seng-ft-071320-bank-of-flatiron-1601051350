import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: '',
    description: '',
    category: '',
    amount: 0
  }

  onTransAdded = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    // console.log(this.props.addTrans)
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e)=>this.props.addTrans(e, this.state)}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.onTransAdded}/>
            <input type="text" name="description" placeholder="Description" onChange={this.onTransAdded}/>
            <input type="text" name="category" placeholder="Category" onChange={this.onTransAdded}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.onTransAdded} />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
