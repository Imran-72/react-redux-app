import { createStore } from "redux";
import { taskReducer } from "./taskReducer";

export function initiateStore() {
  return createStore(taskReducer, [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false },
  ]);
}
