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

const store = createStore(testReducer, [{ id: 1, completed: false }]);
console.log(store.getState());

const App = () => {
  const compliteTask = () => {
    store.dispatch({ type: "test", payload: { id: 1 } });
    console.log(store.getState());
  };
  return (
    <>
      <h1>App</h1>
      <button onClick={compliteTask}>click</button>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
