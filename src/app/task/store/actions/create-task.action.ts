import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { Task } from '../../types/taskState.interface';

export const createTaskAction = createAction(ActionTypes.CREATE_TASK, props<{task:Task}>());
