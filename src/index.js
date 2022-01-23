import React from "react";
import ReactDOM from "react-dom";

function createStore(initialState) {
  let state = initialState;

  function dispatch(action) {
    if (action.type === "test") {
      let newArray = [...state];
      let elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      newArray[elementIndex].completed = true;
      state = newArray;
    }
    console.log(state);
  }
  function getState() {
    return state;
  }

  return {
    getState,
    dispatch,
  };
}

const store = createStore([{ id: 1, completed: false }]);

const App = () => {
  console.log(store.getState());
  return (
    <>
      <h1>App</h1>
      <button
        onClick={() => store.dispatch({ type: "test", payload: { id: 1 } })}
      >
        click
      </button>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
