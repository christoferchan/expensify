import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import AppRouter from "./routers/AppRouter";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expeneses";
import { firebase } from "./firebase/firebase";
const store = configureStore();

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
    document.getElementById("root")
  );
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("log in");
  } else {
    console.log("logged out");
  }
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
