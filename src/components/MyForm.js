import React from "react";

const MyForm = () => {
  return (
    <form className="ui form">
      <div className="fields">
        <div className="four wide field">
          <label>Name</label>
          <input type="text" placeholder="Name of expense" name="name" />
        </div>

        <div className="four wide field">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description of expense"
            name="description"
          />
        </div>

        <div className="four wide field">
          <label>Amount</label>
          <input
            type="text"
            placeholder="Amount of expense"
            name="amount"
          />
        </div>

        <div className="four wide field">
          <button className="ui primary button submit-button">Save</button>
        </div>
      </div>
    </form>
  );
};

export default MyForm;
