import React from "react";
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

  function dispatch(action) {
    return reducer(state, action);
  }
  function getState() {
    return state;
  }

  return {
    getState,
    dispatch,
  };
}

const store = createStore(testReducer, [
  { id: 1, description: "Task 1", completed: false },
  { id: 2, description: "Task 2", completed: false },
]);

const App = () => {
  const state = store.getState();
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
