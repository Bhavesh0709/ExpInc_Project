import React, { useState, useEffect } from "react";
import Expense_tracker from "./Expense_tracker";
import Transaction_history from "./Transaction_history";
import Transaction_form from "./Transaction_form";
import Chart from "./Chart";

const transactiondata = [

];
function ExpenseManager() {
  const [income, setincome] = useState(0);
  const [expense, setexpense] = useState(0);
  const [transaction, settransaction] = useState(transactiondata);
  const [incomeArr,setIncomeArr] = useState([]);
  const [expenseArr,setExpenseArr] = useState([]);
  const [incomedateArr, setIncomeDateArr] = useState([]);
  const [expensedateArr, setExpenseDateArr] = useState([]);
  var a = [];
  var e = [];
  var da = [];
  var de = [];
  const calculateExpense = () => {
    let income = 0,
      expense = 0;
    
    transaction.forEach((data) => {
      if (data.type === "income") {
        income += data.amount;
        a.push(data.amount);
        da.push(data.date);
      } else {
        expense += data.amount;
        e.push(data.amount);
        de.push(data.date);
      }
      
    });
    
    setincome(income);
    setexpense(expense);

    setIncomeArr(a);
    setExpenseArr(e);
    setIncomeDateArr(da);
    setExpenseDateArr(de);
   
  };
  const handleNewTransaction = (item) => {
    let cloneTransaction = [...transaction, item];
    console.log(cloneTransaction);
    settransaction(cloneTransaction);
  };
  const deleteTransactionHandler = (id) => {
    const newTransaction = transaction.filter((item) => item.id != id);
    settransaction(newTransaction);
  };

  useEffect(() => {
    calculateExpense();
   
  }, []);

  useEffect(() => {
    calculateExpense();
    
  }, [transaction]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <h1 className="boldy my-3 "> Expense Manager</h1>
          <Expense_tracker income={income} expense={expense} />
      <Transaction_history
        transactions={transaction}
        onDeleteTransaction={deleteTransactionHandler}
      />
      <Transaction_form onNewTransaction={handleNewTransaction} />
          </div>
          
          <div className="col-md-6 my-4">
           <h3 className="text-center mb-5"><strong> Graph</strong></h3>
          <Chart dataArr={incomeArr}  dateArr={incomedateArr} type='income' Color='rgba(75,192,192,1)'/>
          <Chart dataArr={expenseArr} dateArr={expensedateArr} type='expense' Color='#742774'/>
          </div>

        </div>
      </div>
      
     </div>
  );
}

export default ExpenseManager;
