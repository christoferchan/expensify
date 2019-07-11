import React from "react";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";

const Header = props => {
  return (
    <div>
      <h1>Expensify</h1>
      <NavLink to="/dashboard" activeClassName="is-active" exact={true}>
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Add Expense
      </NavLink>
      <button onClick={props.startLogout}>Logout</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    startLogout: () => dispatch(startLogout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
