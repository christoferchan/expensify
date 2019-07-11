import React, { Component } from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

const LoginPage = props => {
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <button onClick={props.startLogin}>Login</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    startLogin: () => dispatch(startLogin())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
