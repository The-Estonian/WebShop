import PropTypes from 'prop-types';

import styles from './ToDoCard.module.css';

const ToDoCard = ({ todo, todoSwitch, removeTodo }) => {
  let todoStatus = todo.done ? styles.todo_done : styles.todo_notDone;
  return (
    <div className={styles.todo}>
      <span className={todoStatus} onClick={() => todoSwitch(todo.id)}></span>
      <span className={styles.todo_text}>{todo.todo}</span>
      <span className={styles.todo_remove} onClick={() => removeTodo(todo.id)}>
        X
      </span>
    </div>
  );
};

ToDoCard.propTypes = {
  todo: PropTypes.object.isRequired,
  todoSwitch: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default ToDoCard;
