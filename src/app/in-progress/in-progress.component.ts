import { Component } from '@angular/core';
import { InProgressCompComponent } from './in-progress-comp/in-progress-comp.component';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-in-progress',
  standalone: true,
  imports: [InProgressCompComponent,FormsModule,CommonModule],
  templateUrl: './in-progress.component.html',
  styleUrl: './in-progress.component.scss'
})
export class InProgressComponent {
  get service(){
    return this.ts;
  }
  constructor(private ts : TodoService){

  }
  getNumberOfItems(){
    return this.ts.getNumberOfItems('in-progress');
  }
}
