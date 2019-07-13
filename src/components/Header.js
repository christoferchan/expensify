import React from "react";
import { Link } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { clearExpenses } from "../actions/expenses";
import { connect } from "react-redux";

const logout = ({ startLogout, clearExpenses }) => {
  startLogout();
  clearExpenses();
};

const Header = props => {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/dashboard">
            <h1>Expensify</h1>
          </Link>
          <button className="button button--link" onClick={() => logout(props)}>
            Logout
          </button>
        </div>
      </div>
    </header>
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
