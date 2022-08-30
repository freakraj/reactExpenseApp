import axios from "axios";
import React, { useState, useEffect } from "react"; // state use krne ke liye is library ki jarurat padti hai
import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_Expenses = [];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_Expenses);

  const fetchData = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/expense/");
    console.log(response);
    setExpenses(response.data);
  };
  useEffect(() => {
    // // fetch("http://localhost/collection-api/get-api.php")
    // fetch("http://127.0.0.1:8000/api/expense/")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setExpenses(data);
    //   });
    fetchData();
  }, []);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };

  // const addExpenseHandler = (expense) => {
  //   fetch("http://127.0.0.1:8000/api/expense/", {
  //     method: "POST",
  //     body: JSON.stringify(expense),
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   }).then((response) => {
  //     console.log(response);
  //     fetchData();
  //   });
  // };

  // const addExpenseHandler = (expense) => {
  //   const title = expense.target.title.value;
  //   const amount = expense.target.amount.value;
  //   const date = expense.date.date.value;
  //   axios
  //     .post("http://127.0.0.1:8000/api/expense/", {
  //       title,
  //       amount,
  //       date,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
