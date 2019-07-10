import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

// import {
//   addExpense,
//   editExpense,
//   removeExpense
// } from "../../actions/expeneses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const state = expensesReducer(expenses, {
    type: "REMOVE_EXPENSE",
    id: expenses[0].id
  });

  expect(state).toEqual([expenses[1], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const state = expensesReducer(expenses, {
    type: "REMOVE_EXPENSE",
    id: "-1"
  });

  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test("should edit expense by id", () => {
  const state = expensesReducer(expenses, {
    type: "EDIT_EXPENSE",
    id: "1",
    updates: { description: "UPDATED!" }
  });
  expect(state[0].description).toBe("UPDATED!");
});

test("should not edit an expense if no id found", () => {
  const state = expensesReducer(expenses, {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: { description: "UPDATED!" }
  });

  expect(state).toEqual(expenses);
});
test("should add expense", () => {
  const expense = {
    id: "109",
    description: "Car",
    amount: 1000,
    note: "",
    createdAt: 2000
  };
  const state = expensesReducer(expenses, {
    type: "ADD_EXPENSE",
    expense
  });
  expect(state).toEqual([...expenses, expense]);
});
