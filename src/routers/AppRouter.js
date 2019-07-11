import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboard from "../components/ExpenseDashboard";
import HelpPage from "../components/HelpPage";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import createHistory from "history/createBrowserHistory";

export const history = createHistory();

export default function AppRouter() {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={LoginPage} exact={true} />
          <Route path="/dashboard" component={ExpenseDashboard} />
          <Route path="/edit/:id" component={EditExpensePage} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}
