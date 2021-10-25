import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

/*
  - configureStore
    - this is how we create a store when using redux toolkit
  - counter: counterReducer
    - When we pass in an object like {counter: counterReducer}
      - that says that we want to have a state.counter section of our Redux state object
        - state.counter might came from counterSlice.js name: 'counter' in createSlice()
      - and that we want the counterReducer function to be in charge of deciding if and how to update the state.counter section whenever an action is dispatched.
  - counterReducer
    - we refer this as "slice reducer" function since counterReducer is responsible for updating the state.counter slice
*/