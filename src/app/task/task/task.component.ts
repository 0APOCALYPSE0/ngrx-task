import { reducers } from './../../index';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Task, TaskState } from '../types/taskState.interface';
import { Observable } from 'rxjs';
import { selectAll } from '../store/selector';
import { createTaskAction } from '../store/actions/create-task.action';
import { updateTaskAction } from '../store/actions/update-task.action';
import { deleteTaskAction } from '../store/actions/delete-task.action';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{
  tasks$!: Observable<any>;
  taskForm!:FormGroup;
  modalType!:string;

  constructor(private store:Store<TaskState>, private fb:FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.fetchTasks();
  }

  createForm(): void{
    this.taskForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  fetchTasks(): void{
    this.tasks$ = this.store.pipe(select(selectAll));
  }

  createTask(): void{
    const task:Task = {
      id: new Date().getUTCMilliseconds().toString(),
      title: this.taskForm.value.title,
      description: this.taskForm.value.description
    }
    this.store.dispatch(createTaskAction({task}));
  }

  updateTask(): void{
    let updatedTask: { id:string, changes: Partial<Task>} = {
      id: this.taskForm.value.id,
      changes: {
        title: this.taskForm.value.title,
        description: this.taskForm.value.description
      }
    };
    this.store.dispatch(updateTaskAction(updatedTask));
  }

  deleteTask(id:string): void{
    this.store.dispatch(deleteTaskAction({id}));
  }

  openModal(type:string, task?:Task): void{
    this.taskForm.reset();
    document.getElementById("taskModalBtn")?.click();
    this.modalType = type;
    if(this.modalType === 'edit'){
      this.setForm(task);
    }
  }

  setForm(task:Task|undefined):void {
    this.taskForm.patchValue({
      id: task?.id,
      title: task?.title,
      description: task?.description
    });
  }

  onSaveClick(): void{
    if(this.modalType === 'create'){
      this.createTask();
    }else if(this.modalType === 'edit'){
      this.updateTask();
    }
  }

}
