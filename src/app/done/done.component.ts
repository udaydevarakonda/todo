import { Component } from '@angular/core';
import { DoneCompComponent } from './done-comp/done-comp.component';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-done',
  standalone: true,
  imports: [DoneCompComponent,FormsModule,CommonModule],
  templateUrl: './done.component.html',
  styleUrl: './done.component.scss'
})
export class DoneComponent {
  get service(){
    return this.ts;
  }
  constructor(private ts : TodoService){

  }
  getNumberOfItems(){
    return this.ts.getNumberOfItems('done');
  }
}
