import { createReducer, on, Action } from '@ngrx/store';
import { TaskState, taskAdapter } from "../types/taskState.interface";
import { createTaskAction } from './actions/create-task.action';
import { updateTaskAction } from './actions/update-task.action';
import { deleteTaskAction } from './actions/delete-task.action';

export const initialState:TaskState = taskAdapter.getInitialState();

const reducer = createReducer(initialState,
  on(createTaskAction, (state, action):TaskState => taskAdapter.addOne(action.task, state)),
  on(updateTaskAction, (state, action):TaskState => taskAdapter.updateOne({ id: action.id, changes: action.changes }, state)),
  on(deleteTaskAction, (state, action):TaskState => taskAdapter.removeOne(action.id, state)),
);

export const taskReducer = (state:TaskState, action:Action) => {
  return reducer(state, action);
}