import { useState, useEffect } from 'react';

import ToDoCard from './ToDoCard';
import AddToDo from './AddToDo';

import styles from './ToDo.module.css';

const ToDo = () => {
  const [toDoList, setToDoList] = useState([
    // { id: 1, todo: 'woof', done: false },
    // { id: 2, todo: 'poof', done: true },
  ]);

  useEffect(() => {
    fetch('http://localhost:8080/api/todos', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setToDoList(data.todoList);
      });
  }, []);

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

  const removeTodo = (id) => {
    // remove todo from backend

    // remove todo in frontend
    let newList = toDoList.filter((item) => item.id !== id);
    console.log(newList);

    setToDoList(newList);
  };

  const addTodo = (input) => {
    // send todo to backend

    // add todo in frontend
    setToDoList((prev) => [...prev, { todo: input, done: false }]);
  };

  return (
    <div className={styles.todo_container}>
      {toDoList.map((todo) => {
        return (
          <ToDoCard
            key={todo.id}
            todo={todo}
            todoSwitch={todoSwitch}
            removeTodo={removeTodo}
          />
        );
      })}
      <AddToDo addTodo={addTodo} />
    </div>
  );
};

export default ToDo;
