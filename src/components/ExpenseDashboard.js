import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";
export default function ExpenseDashboard() {
  return (
    <div>
      <ExpensesSummary />
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
}
