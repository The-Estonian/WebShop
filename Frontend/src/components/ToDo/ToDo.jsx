import { useState } from 'react';

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
        let todoStatus = todo.done ? styles.todo_done : styles.todo_notDone;
        return (
          <div key={index} className={styles.todo}>
            <span
              className={todoStatus}
              onClick={() => todoSwitch(todo.id)}
            ></span>
            <span className={styles.todo_text}>{todo.todo}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ToDo;
