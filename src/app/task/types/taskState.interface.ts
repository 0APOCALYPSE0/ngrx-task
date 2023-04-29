import { createEntityAdapter, EntityState } from '@ngrx/entity';

export type Task = {
  id:string;
  title:string;
  description:string;
}

export const taskAdapter = createEntityAdapter<Task>();

export interface TaskState extends EntityState<Task> { };