// (state, action) => nextState;
//createReducer(initialState, actionsMap)

// import { statusFilters } from './constants';
// // Імпортуємо функцію композиції редюсерів
// import { combineReducers } from "redux";

// const initialState = {
//   tasks: [
//     { id: 0, text: 'Learn HTML and CSS', completed: true },
//     { id: 1, text: 'Get good at JavaScript', completed: true },
//     { id: 2, text: 'Master React', completed: false },
//     { id: 3, text: 'Discover Redux', completed: false },
//     { id: 4, text: 'Build amazing apps', completed: false },
//   ],
//   filters: {
//     status: statusFilters.all,
//   },
// };

// import { addTask, deleteTask, toggleCompleted, setStatusFilter } from './actions';
// import { createReducer } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';

// const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState: tasksInitialState,
//   reducers: {
//     addTask: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(text) {
//         return {
//           payload: {
//             text,
//             id: nanoid(),
//             completed: false,
//           },
//         };
//       },
//     },
//     deleteTask(state, action) {
//       const index = state.findIndex(task => task.id === action.payload);
//       state.splice(index, 1);
//     },
//     toggleCompleted(state, action) {
//       for (const task of state) {
//         if (task.id === action.payload) {
//           task.completed = !task.completed;
//           break;
//         }
//       }
//     },
//   },
// });

// const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
// export const tasksReducer = tasksSlice.reducer;

// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {
//     // return [...state, action.payload];
//     state.push(action.payload);
//   },
//   [deleteTask]: (state, action) => {
//     // return state.filter(task => task.id !== action.payload);
//     const index = state.findIndex(task => task.id === action.payload);
//     state.splice(index, 1);
//   },
//   [toggleCompleted]: (state, action) => {
//     //  return state.map(task => {
//     //    if (task.id !== action.payload) {
//     //      return task;
//     //    }
//     //    return {
//     //      ...task,
//     //      completed: !task.completed,
//     //    };
//     //  });
//     for (const task of state) {
//       if (task.id === action.payload) {
//         task.completed = !task.completed;
//       }
//     }
//   },
// });

// Відповідає лише за оновлення властивості tasks
// Тепер значенням параметра state буде масив завдань
// export const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     // case "tasks/addTask":
//     case addTask.type:
//       return [...state, action.payload];
//     // case 'tasks/deleteTask':
//     case deleteTask.type:
//       return state.filter(task => task.id !== action.payload);
//     // case 'tasks/toggleCompleted':
//     case toggleCompleted.type:
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     default:
//       return state;
//   }
// };

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// const filtersSlice = createSlice({
//   name: 'filters',
//   initialState: filtersInitialState,
//   reducers: {
//     setStatusFilter(state, action) {
//       state.status = action.payload;
//     },
//   },
// });
// // Експортуємо генератори екшенів та редюсер
// export const { setStatusFilter } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;

// export const filtersReducer = createReducer(filtersInitialState, {
//   [setStatusFilter]: (state, action) => {
//     // return {
//     //   ...state,
//     //   status: action.payload,
//     // };
//     state.status = action.payload;
//   },
// });

// Відповідає лише за оновлення властивості filters
// Тепер значенням параметра state буде об'єкт фільтрів
// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const rootReducer = (state = {}, action) => {
//   // Повертаємо об'єкт стану
//   return {
//     // Обом редюсерам передаємо тільки частину стану, за яку вони відповідають.
//     tasks: tasksReducer(state.tasks, action),
//     filters: filtersReducer(state.filters, action),
//   };
// };

//=============== Before ========================
// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });



// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'tasks/addTask':
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//       };
//     case 'tasks/deleteTask':
//       return {
//         ...state,
//         tasks: state.tasks.filter(task => task.id !== action.payload),
//       };
//     case 'tasks/toggleCompleted':
//       return {
//         ...state,
//         tasks: state.tasks.map(task => {
//           if (task.id !== action.payload) {
//             return task;
//           }
//           return {
//             ...task,
//             completed: !task.completed,
//           };
//         }),
//       };
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           status: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

// export const rootReducer = (state = initialState, action) => {
  // Редюсер розрізняє екшени за значенням властивості type
//   switch (action.type) {
    // Залежно від типу екшену виконуватиметься різна логіка
    // case 'tasks/addTask': {
      // Потрібно повернути новий об'єкт стану
    //   return {
        // в якому є всі дані існуючого стану
        // ...state,
        // та новий масив задач
        // tasks: [
          // в якому є всі існуючі завдання
        //   ...state.tasks,
          // та об'єкт нового завдання
        //   action.payload,
        // ],
    //   };
    // }
    // default:
      // Кожен редюсер отримує всі екшени, відправлені в стор.
      // Якщо редюсер не повинен обробляти якийсь тип екшену,
      // необхідно повернути наявний стан без змін.
    //   return state;
//   }
// };

// Використовуємо initialState як значення стану за умовчанням
// export const rootReducer = (state = initialState, action) => {
  // Редюсер розрізняє екшени за значенням властивості type
//   switch (action.type) {
    // Залежно від типу екшену виконуватиметься різна логіка
    // default:
      // Кожен редюсер отримує всі екшени, відправлені в стор.
      // Якщо редюсер не повинен обробляти якийсь тип екшену,
      // необхідно повернути наявний стан без змін.
    //   return state;
//   }
// };