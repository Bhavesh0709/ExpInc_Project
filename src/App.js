import React from "react";
import "../src/css/style.css";
import Register from "./Examples/Register";
import WebForm from "./Examples/WebForm";
import Login from "./Examples/Login"
import ExpenseManager from "./Expense_tracker/ExpenseManager";
import Chart  from "./Expense_tracker/Chart";



function App() {
  return (
    <div className="">      
      {/* <WebForm /> */}
      {/* <Register/> */}
      {/* <Login /> */}
      <ExpenseManager />
     
    </div>
  );
}

export default App;
