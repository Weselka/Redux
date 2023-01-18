// Імпортуємо хук
import { useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
// Імпортуємо генератор екшену
// import { addTask } from '../../redux/actions';
import { addTask } from 'redux/tasksSlice';
import css from './TaskForm.module.css';



export const TaskForm = () => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
