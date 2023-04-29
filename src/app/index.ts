import { ActionReducerMap } from '@ngrx/store';
import { taskReducer } from './task/store/reducer';

export const reducers: ActionReducerMap<any> = {
  task: taskReducer
}