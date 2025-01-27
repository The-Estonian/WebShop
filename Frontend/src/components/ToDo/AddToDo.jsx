import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './AddToDo.module.css';

const AddToDo = ({ addTodo }) => {
  const [todoInput, setTodoInput] = useState('');

  const insertIntoTodo = (e) => {
    setTodoInput(e.target.value);
  };
  const insertTodo = () => {
    addTodo(todoInput);
    setTodoInput('');
  };
  return (
    <div className={styles.add_todo_container}>
      <span className={styles.todo_title}>To-Do: </span>
      <input
        className={styles.todo_input}
        type='text'
        value={todoInput}
        onChange={insertIntoTodo}
      />
      <span className={styles.todo_send} onClick={insertTodo}>
        ADD
      </span>
    </div>
  );
};

AddToDo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddToDo;
