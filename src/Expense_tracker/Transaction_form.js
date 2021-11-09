import React, { useState } from "react";
import { unique_id } from "./unique_id";

function Transaction_form({ onNewTransaction }) {
  const [nameValue, setNameValue] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  const nameChangeHandler = (event) => {
    setNameValue(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmountValue(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDateValue(event.target.value);
  };

  const addTransaction = (type, event) => {
    event.preventDefault();

    var mm = dateValue.substr(5, 2);
    var yy = dateValue.substr(0, 4);
    var dd = dateValue.substr(8, 2);

    var date = dd + "-" + mm + "-" + yy;
    const data = {
      id: unique_id(),
      name: nameValue,
      amount: parseInt(amountValue),
      type: type,
      date: date,
    };

    onNewTransaction(data);
    setNameValue("");
    setAmountValue("");
    setDateValue("");
  };
  return (
    <div>
      <h3 className="my-4">
        <strong>Add New Transaction</strong>{" "}
      </h3>
      <div className="container">
        <div className="row ">
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <label for="name">Transaction</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  value={nameValue}
                  onChange={nameChangeHandler}
                />
              </div>
              <div className="form-group">
                <label>Amount</label>
                <input
                  type="number"
                  class="form-control"
                  value={amountValue}
                  onChange={amountChangeHandler}
                />
              </div>
              <div className="form-group">
                <label>Amount</label>
                <input
                  type="date"
                  class="form-control"
                  value={dateValue}
                  onChange={dateChangeHandler}
                />
              </div>
            </form>
            <div className="mt-4">
              <button
                className="btn btn-success "
                onClick={(event) => addTransaction("income", event)}
              >
                Add Income
              </button>
              <button
                className="btn btn-danger mx-2"
                onClick={(event) => addTransaction("expense", event)}
              >
                Add Expense
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction_form;
