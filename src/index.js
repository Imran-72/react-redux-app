import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { getErrors } from "./store/errors";
import configureStore from "./store/store";
import * as actions from "./store/task";

const store = configureStore();

const App = () => {
  const [value, setValue] = useState("");
  const state = useSelector(actions.getTasks());
  const isLoading = useSelector(actions.getTasksLoadingStatus());
  const error = useSelector(getErrors());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.loadTasks());
  }, []);

  const changeTitle = (taskId) => {
    dispatch(actions.titleChanged(taskId));
  };

  const deleteTask = (taskId) => {
    dispatch(actions.taskDeleted(taskId));
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>App</h1>
      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>{`Completed: ${el.completed}`}</p>
            <button onClick={() => dispatch(actions.compliteTask(el.id))}>
              Completed
            </button>
            <button onClick={() => changeTitle(el.id)}>Change title</button>
            <button onClick={() => deleteTask(el.id)}>Delete</button>
            <hr />
          </li>
        ))}
      </ul>
      <div>
        <div>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
        <button
          onClick={() =>
            dispatch(actions.createTask({ title: value, completed: false }))
          }
        >
          Create Task
        </button>
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
