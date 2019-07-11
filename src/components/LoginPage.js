import React, { Component } from "react";

class LoginPage extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flex: "1",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <button onClick={() => this.props.history.push("/dashboard")}>
          Login
        </button>
      </div>
    );
  }
}

export default LoginPage;
