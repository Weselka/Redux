// Імпортуємо хук
import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
// import { selectTasks, selectStatusFilter } from '../../redux/selectors';
import { selectVisibleTasks } from 'redux/selectors';
// Імпортуємо об'єкт значень фільтра
// import { statusFilters } from '../../redux/constants';
import css from './TaskList.module.css';

// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter(task => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter(task => task.completed);
//     default:
//       return tasks;
//   }
// };

export const TaskList = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(selectVisibleTasks);
  // Отримуємо значення фільтра із стану Redux
  // const statusFilter = useSelector(selectStatusFilter);
  // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  // const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
