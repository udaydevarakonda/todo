import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  task:string='';
  constructor(private ts:TodoService) { }

  addItem(task:string){
    this.ts.addItem(task);
    task='';
  }


}
