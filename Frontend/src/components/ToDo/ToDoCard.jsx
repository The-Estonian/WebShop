import PropTypes from 'prop-types';

import styles from './ToDoCard.module.css';

const ToDoCard = ({ todo, todoSwitch }) => {
  let todoStatus = todo.done ? styles.todo_done : styles.todo_notDone;
  return (
    <div className={styles.todo} onClick={() => todoSwitch(todo.id)}>
      <span className={todoStatus}></span>
      <span className={styles.todo_text}>{todo.todo}</span>
    </div>
  );
};

ToDoCard.propTypes = {
  todo: PropTypes.object.isRequired,
  todoSwitch: PropTypes.func.isRequired,
};

export default ToDoCard;
