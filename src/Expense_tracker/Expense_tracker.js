import React, { useState } from "react";

function Expense_tracker({ income, expense }) {

  return (
    <div>
      <div className="container my-3">
        <div className="row ">
          <div className="col-md-6">
            <div class="alert alert-success" role="alert">
              Balance <span className="mx-5"><strong>${income - expense}</strong></span>
            </div>
            <div class="alert alert-info " role="alert">
              Income <span className="mx-5"><strong>${income}</strong></span>
            </div>
            <h3></h3>
            <div class="alert alert-danger" role="alert">
              Expense <span className="mx-5"><strong>${expense}</strong></span>
            </div>
            <h3></h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expense_tracker;
