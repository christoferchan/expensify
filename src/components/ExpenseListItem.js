import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expeneses";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {amount} - {createdAt}
      </p>
      <button onClick={() => dispatch(removeExpense({ id }))}>Remove</button>
    </div>
  );
};

export default connect()(ExpenseListItem);
