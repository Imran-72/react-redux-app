export function createStore(reducer, initialState) {
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
