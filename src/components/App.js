import React from "react";
import MyForm from "./MyForm";
import ExpenseList from "./ExpenseList";
import "./app.css";

const App = () => {
  return (
    <div>
      <div className="ui fixed inverted menu">
        <div className="ui container">
          <a className="header item" href="#">
            BudgetBuddy
          </a>
          <div className="right menu">
            <a className="item" href="#">
              Home
            </a>
            <a className="item" href="#">
              About
            </a>
            <a className="item" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="ui main container">
        <MyForm />
        <ExpenseList />
      </div>
    </div>
  );
};

export default App;
