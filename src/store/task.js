import { createSlice } from "@reduxjs/toolkit";
import todosServices from "../services/todosServices";
import { setError } from "./errors";
const initialState = { entities: [], isLoading: true, error: null };

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    recived(state, action) {
      state.entities = action.payload;
      state.isLoading = false;
    },
    update(state, action) {
      const elementIndex = state.entities.findIndex(
        (el) => el.id === action.payload.id
      );
      state.entities[elementIndex] = {
        ...state.entities[elementIndex],
        ...action.payload,
      };
    },
    remove(state, action) {
      state.entities = state.entities.filter((el) => el.id !== action.payload);
    },
    taskRequested(state, action) {
      state.isLoading = true;
    },
    taskRequestedField(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    taskCreated(state, action) {
      state.entities.push(action.payload);
      state.isLoading = false;
    },
  },
});

const { actions, reducer: taskReducer } = taskSlice;
const {
  recived,
  update,
  remove,
  taskRequested,
  taskRequestedField,
  taskCreated,
} = actions;

export const loadTasks = () => async (dispatch) => {
  dispatch(taskRequested());
  try {
    const data = await todosServices.fetch();
    dispatch(recived(data));
  } catch (error) {
    dispatch(taskRequestedField());
    dispatch(setError(error.message));
  }
};

export const compliteTask = (id) => (dispatch) => {
  dispatch(update({ id, completed: true }));
};

export function titleChanged(id) {
  return update({ id: id, title: `New title for ${id}` });
}

export function taskDeleted(id) {
  return remove(id);
}

export const createTask = (post) => async (dispatch) => {
  try {
    const data = await todosServices.create(post);
    dispatch(taskCreated(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const getTasks = () => (state) => state.tasks.entities;
export const getTasksLoadingStatus = () => (state) => state.tasks.isLoading;

export default taskReducer;
