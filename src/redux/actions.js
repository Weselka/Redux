// import { nanoid } from 'nanoid';
// Імпортуємо хук
// import { useDispatch } from "react-redux";
// const MyComponent = () => {
// Отримуємо посилання на функцію відправки екшенів
//   const dispatch = useDispatch();
// };

// const action = {
//   type: 'Action type',
//   payload: 'Payload value',
// };

//createAction(type, prepareAction)

//=============== After ========================
// import { createAction, nanoid } from '@reduxjs/toolkit';
// import { deleteTask, toggleCompleted } from 'redux/tasksSlice';

// export const addTask = createAction('tasks/AddTask', text => {
//   return {
//     payload: {
//       text,
//       id: nanoid(),
//       completed: false,
//     },
//   };
// });

// console.log(addTask('Learn Redux Toolkit')); // {type: "tasks/addTask", payload: "Learn Redux Toolkit"}

// export const addTask = text => {
//   return {
//     type: 'tasks/addTask',
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text,
//     },
//   };
// };

// const addTask = {
//   type: 'tasks/addTask',
//   payload: {
//     id: 'Generated id',
//     text: 'User entered text',
//     completed: false,
//   },
// };

// export const deleteTask = createAction('tasks/deleteTask');

// export const deleteTask = taskId => {
//   return {
//     type: 'tasks/deleteTask',
//     payload: taskId,
//   };
// };

// const deleteTask = {
//   type: 'tasks/deleteTask',
//   payload: 'Task id',
// };

// export const toggleCompleted = createAction('tasks/toggleCompleted');

// export const toggleCompleted = taskId => {
//   return {
//     type: 'tasks/toggleCompleted',
//     payload: taskId,
//   };
// };

// const toggleCompleted = {
//   type: 'tasks/toggleCompleted',
//   payload: 'Task id',
// };

// export const setStatusFilter = createAction('filters/setStatusFilter');

// export const setStatusFilter = value => {
//   return {
//     type: 'filters/setStatusFilter',
//     payload: value,
//   };
// };

// const setStatusFilter = {
//   type: 'filters/setStatusFilter',
//   payload: 'Filter value',
// };
