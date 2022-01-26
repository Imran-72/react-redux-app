import { createStore } from "redux";
import { taskReducer } from "./task/reducer";

function configureStore() {
  return createStore(taskReducer, [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false },
  ]);
}

export default configureStore;
