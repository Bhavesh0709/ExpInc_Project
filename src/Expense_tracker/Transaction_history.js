import React from "react";

function Transaction_history({ transactions, onDeleteTransaction }) {
  return (
    <div>
      <h3 className=""><strong>Transaction History</strong> </h3>
      <div className="container">
        <div className="row ">
          <div className="col-md-6">
            <div className="card">
              <ul className="list-group list-group-flush">
                {transactions.map((i) => (
                  <li key={i.id} className="list-group-item">
                    {i.name} - ${i.amount}{" "}
                    <button onClick={() => onDeleteTransaction(i.id)} className="mx-2 btn btn-sm btn-danger makeit"><i className="fas fa-trash-alt"></i></button>{" "}
                  </li>
                ))}
              </ul>
             
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction_history;
