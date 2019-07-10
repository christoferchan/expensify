import React, { Component } from "react";
import { connect } from "react-redux";
import selectExpensesTotal from "../selectors/selectExpensesTotal";
import getVisibleExpenses from "../selectors/expenses";
import numeral from "numeral";

const ExpensesSummary = ({ expenseCount, total }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpenseTotal = numeral(total / 100).format("$0,0.00");
  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    total: selectExpensesTotal(visibleExpenses)
  };
};
export default connect(mapStateToProps)(ExpensesSummary);
