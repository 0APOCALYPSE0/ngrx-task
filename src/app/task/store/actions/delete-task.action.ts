import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { Task } from '../../types/taskState.interface';

export const deleteTaskAction = createAction(ActionTypes.DELETE_TASK, props<{id:string}>());