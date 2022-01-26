import { taskDeleted, taskUpdated } from "./actionTypes";

export function taskReducer(state = [], action) {
  switch (action.type) {
    case taskUpdated:
      let newArray = [...state];
      let elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      newArray[elementIndex] = {
        ...newArray[elementIndex],
        ...action.payload,
      };
      return newArray;

    case taskDeleted:
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
}
