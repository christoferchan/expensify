import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenses";

class ExpenseList extends React.Component {
  render() {
    return (
      <div>
        {this.props.expenses.length === 0 && <p>No Expenses</p>}
        {this.props.expenses.map(expense => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
