export const TASK_UPDATED = "taskUpdated";
export const TASK_DELETED = "taskDeleted";

function taskReducer(state = [], action) {
  switch (action.type) {
    case TASK_UPDATED:
      let newArray = [...state];
      let elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      newArray[elementIndex] = {
        ...newArray[elementIndex],
        ...action.payload,
      };
      return newArray;

    case TASK_DELETED:
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
}

export function taskComplited(id) {
  return {
    type: TASK_UPDATED,
    payload: { id: id, completed: true },
  };
}

export function titleChanged(id) {
  return {
    type: TASK_UPDATED,
    payload: { id: id, title: `New title for ${id}` },
  };
}

export function taskDeleted(id) {
  return {
    type: TASK_DELETED,
    payload: id,
  };
}

export default taskReducer;
