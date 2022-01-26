import * as actions from "./actionTypes";

export function taskComplited(id) {
  return {
    type: actions.taskUpdated,
    payload: { id: id, completed: true },
  };
}

export function titleChanged(id) {
  return {
    type: actions.taskUpdated,
    payload: { id: id, title: `New title for ${id}` },
  };
}
