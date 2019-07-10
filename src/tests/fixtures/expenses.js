import moment from "moment";

export default [
  {
    id: "1",
    description: "Rent",
    amount: 1020.5,
    note: "",
    createdAt: 0
  },
  {
    id: "2",
    description: "Gum",
    amount: 1.5,
    note: "",
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "Gas",
    amount: 40.0,
    note: "",
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];
