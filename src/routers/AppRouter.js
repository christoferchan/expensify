import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboard from "../components/ExpenseDashboard";
import HelpPage from "../components/HelpPage";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={ExpenseDashboard} exact={true} />
          <Route path="/edit/:id" component={EditExpensePage} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
