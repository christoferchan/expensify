import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expeneses";

const AddExpensePage = props => {
  return (
    <div>
      <h1>Add Expense</h1>
      <h1>ADD THAT THING DOE</h1>
      <ExpenseForm
        onSubmit={expense => {
          props.dispatch(addExpense(expense));
          props.history.push("/");
        }}
      />
    </div>
  );
};

export default connect()(AddExpensePage);
