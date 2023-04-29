import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { Task } from '../../types/taskState.interface';

export const updateTaskAction = createAction(ActionTypes.UPDATE_TASK, props<{id:string, changes: Partial<Task>}>());