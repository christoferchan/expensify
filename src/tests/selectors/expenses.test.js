import getVisibleExpenses from "../../selectors/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";

test("should filter by text value", () => {
  const filters = {
    text: "g",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisibleExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[1]]);
});

test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };

  const result = getVisibleExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[0]]);
});

test("should filter by endDate", () => {
  const filter = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).add(2, "days")
  };

  const result = getVisibleExpenses(expenses, filter);

  expect(result).toEqual([expenses[0], expenses[1]]);
});

test("should filter by date", () => {
  const filter = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };

  const result = getVisibleExpenses(expenses, filter);

  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("should filter by amount", () => {
  const filter = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };

  const result = getVisibleExpenses(expenses, filter);

  expect(result).toEqual([expenses[0], expenses[2], expenses[1]]);
});
