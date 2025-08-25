import { Component, Inject, Input } from '@angular/core';
import { PopupService } from './popup.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  item :any;
  constructor(private ds: PopupService, public service: TodoService, @Inject(MAT_DIALOG_DATA) public data: any) {
     console.log("data is ",data);
     this.item=data;
  }
  closeDialog(){
    this.ds.closeDialog();
  }
  
  saveItem(){
    this.service.saveItem(this.item);
    this.ds.closeDialog();
  }
  
}
