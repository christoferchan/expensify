import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => {
  return (
    <Link
      className="list-item"
      to={`/edit/${id}`}
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1.5rem"
      }}
    >
      <div>
        <h3 className="list-item__title">{description}</h3>
        <span className="list-item__sub-title">
          {numeral(amount / 100).format("$0,0.00")}
        </span>
      </div>
      <h3 className="list-item__data">
        {moment(createdAt).format("MMMM Do, YYYY")}
      </h3>
    </Link>
  );
};

export default connect()(ExpenseListItem);
