import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function testReducer(state, action) {
  switch (action.type) {
    case "test":
      let newArray = [...state];
      let elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      newArray[elementIndex].completed = true;
      state = newArray;

      return newArray;
    default:
      break;
  }
}
function createStore(reducer, initialState) {
  let state = initialState;
  let listeners = [];

  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }
  function subscribe(listener) {
    listeners.push(listener);
  }
  function getState() {
    return state;
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

const store = createStore(testReducer, [
  { id: 1, description: "Task 1", completed: false },
  { id: 2, description: "Task 2", completed: false },
]);

const App = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  const compliteTask = (taskId) => {
    store.dispatch({ type: "test", payload: { id: taskId } });
    console.log(store.getState());
  };
  return (
    <>
      <h1>App</h1>
      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.description}</p>
            <p>{`Completed: ${el.completed}`}</p>
            <button onClick={() => compliteTask(el.id)}>Completed</button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
