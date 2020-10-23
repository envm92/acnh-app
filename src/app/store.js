import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import villagersReducer from '../features/villagers/villagers.slice'

export default configureStore({
  reducer: {
    villagers: villagersReducer
  },
  middleware: [
    thunk
  ]
});
