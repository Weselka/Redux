import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './tasksSlice';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';
const fetchTasks = () => async dispatch => {
    try {
      dispatch(fetchingInProgress());
    const response = await axios.get('/tasks');
    } catch (e) {
        dispatch(fetchingError(e.message));
  }
};
