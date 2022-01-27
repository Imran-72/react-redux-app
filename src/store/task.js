import { createAction, createReducer } from "@reduxjs/toolkit";
const initialState = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: false },
];
const update = createAction("taskUpdated");
const remove = createAction("taskDeleted");

const taskReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(update, (state, action) => {
      const elementIndex = state.findIndex((el) => el.id === action.payload.id);
      state[elementIndex] = {
        ...state[elementIndex],
        ...action.payload,
      };
    })
    .addCase(remove, (state, action) => {
      return state.filter((el) => el.id !== action.payload);
    });
});

export function taskComplited(id) {
  return update({ id: id, completed: true });
}

export function titleChanged(id) {
  return update({ id: id, title: `New title for ${id}` });
}

export function taskDeleted(id) {
  return remove(id);
}

export default taskReducer;
