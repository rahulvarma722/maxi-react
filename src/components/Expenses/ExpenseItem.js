import React, { useState } from 'react';
import './expense.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.js';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandle = () => {
    console.log('click clickHandle');
    setTitle('Updated Title');
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandle}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
