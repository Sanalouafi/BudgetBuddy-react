import React from "react";
import Expense from "./Expense";

const ExpenseList = () => {
  return (
    <div className="data">
      <h1>Expense List</h1>
      <table className="ui called table">
        <thead>
          <tr>
            <th style={{ width: "50px", textAlign: "center" }}>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Amount</th>
            <th colSpan="2" style={{ textAlign: "center" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <Expense/>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
