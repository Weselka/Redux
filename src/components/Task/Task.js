// Імпортуємо хук
import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
// Імпортуємо генератор екшену
// import { deleteTask, toggleCompleted } from '../../redux/actions';
// import { deleteTask, toggleCompleted } from 'redux/tasksSlice';
import { deleteTask, toggleCompleted } from 'redux/operations';

import css from './Task.module.css';



export const Task = ({ task }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен видалення завдання
  const handleDelete = () => dispatch(deleteTask(task.id));
  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен перемикання статусу завдання
  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    // <div>
    //   <input type="checkbox" checked={task.completed} />
    //   <p>{task.text}</p>
    //   <button onClick={handleDelete}>
    //     <MdClose size={24} />
    //   </button>
    // </div>
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} type="button" onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
