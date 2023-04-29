import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './store/reducer';


@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('task', taskReducer)
  ],
  exports: [TaskComponent]
})
export class TaskModule { }
