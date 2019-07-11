import React from "react";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { clearExpenses } from "../actions/expenses";
import { connect } from "react-redux";

const logout = ({ startLogout, clearExpenses }) => {
  startLogout();
  clearExpenses();
};

const Header = props => {
  return (
    <div>
      <h1>Expensify</h1>
      <NavLink to="/dashboard" activeClassName="is-active">
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Add Expense
      </NavLink>
      <button onClick={() => logout(props)}>Logout</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    startLogout: () => dispatch(startLogout()),
    clearExpenses: () => dispatch(clearExpenses())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
