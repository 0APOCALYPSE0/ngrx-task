import { createFeatureSelector } from '@ngrx/store';
import { TaskState, taskAdapter } from '../types/taskState.interface';

export const getTaskState = createFeatureSelector<TaskState>('task');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = taskAdapter.getSelectors(getTaskState);