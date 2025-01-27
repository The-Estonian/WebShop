import { useState } from 'react';

import ToDoCard from './ToDoCard';

import styles from './ToDo.module.css';

const ToDo = () => {
  const [toDoList, setToDoList] = useState([
    { id: 1, todo: 'woof', done: false },
    { id: 2, todo: 'poof', done: true },
  ]);

  const todoSwitch = (id) => {
    // change todo status in backend

    // change todo status in frontend
    let newList = toDoList.map((item) => {
      if (item.id == id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setToDoList(newList);
  };

  return (
    <div className={styles.todo_container}>
      {toDoList.map((todo, index) => {
        return <ToDoCard key={index} todo={todo} todoSwitch={todoSwitch} />;
      })}
    </div>
  );
};

export default ToDo;
