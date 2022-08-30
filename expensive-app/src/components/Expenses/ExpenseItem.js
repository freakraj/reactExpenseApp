import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [newTitle, setNewTitle] = useState("");
  // const [title, setTitle] = useState(props.title); // usestate ak array return krta hai jiske ander do cheez hoti hai variable aur function krta hai
  // const clickHandler = () => {
  //   setTitle(newTitle);
  // };

  // const changeHandler = (event) => {
  //   // ye event ak object hai isme kya hota hai apka jo bhi event hua hai user ke dwara kuch bhi kiya gya uske bare me ye event sari jankariya rkhta hai
  //   setNewTitle(event.target.value);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={new Date(props.date)} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
