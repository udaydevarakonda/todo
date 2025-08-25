import { Component } from '@angular/core';
import { TodoComponent } from '../tasks/todo/todo.component';
import { TodoCompComponent } from './todo-comp/todo-comp.component';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoComponent,TodoCompComponent,CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {

  get service(){
    return this.ts;
  }
  constructor(private ts : TodoService){

  }
  getNumberOfItems(){
    return this.ts.getNumberOfItems('todo');
  }
}
