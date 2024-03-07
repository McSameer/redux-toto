import { configureStore } from '@reduxjs/toolkit';
import Reducer from './reducer';
import logger from 'redux-logger';

export default configureStore({
  reducer: {
    todos: Reducer,
  },
  // to view the redux state
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})