import { createAction } from "@reduxjs/toolkit";

const update = createAction("taskUpdated");
const remove = createAction("taskDeleted");

function taskReducer(state = [], action) {
  switch (action.type) {
    case update.type:
      let newArray = [...state];
      let elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      newArray[elementIndex] = {
        ...newArray[elementIndex],
        ...action.payload,
      };
      return newArray;

    case remove.type:
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
}

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
