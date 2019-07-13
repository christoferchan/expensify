import React, { Component } from "react";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: null,
      title: props.expense ? "Save Expense" : "Add Expense"
    };
  }
  onChangeText = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ amount });
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState({ error: "Please provide description and amount." });
    } else {
      this.props.onSubmit({
        description: this.state.description,
        note: this.state.note,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf()
      });
      this.setState({ error: null, description: "", note: "", amount: "" });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          className="text-input"
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onChangeText}
          name="description"
        />
        <input
          className="text-input"
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          className="text-input"
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          block
        />
        <textarea
          className="textarea"
          placeholder="Add a note for your expense (optional)"
          onChange={this.onChangeText}
          name="note"
          value={this.state.note}
        />
        <div>
          <button className="button">{this.state.title}</button>
        </div>
      </form>
    );
  }
}
