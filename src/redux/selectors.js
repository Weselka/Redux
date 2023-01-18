// Імпортуємо хук
// import { useSelector } from 'react-redux';
// const MyComponent = () => {
  // Отримуємо необхідну частину стану
//   const value = useSelector(state => state.some.value);
// };

export const getTasks = state => state.tasks;
export const getStatusFilter = state => state.filters.status;