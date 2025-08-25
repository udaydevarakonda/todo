import { Component, Input } from '@angular/core';
import { TodoService } from '../../todo.service';
import { PopupService } from '../../popup/popup.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-done-comp',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './done-comp.component.html',
  styleUrl: './done-comp.component.scss'
})
export class DoneCompComponent {
  @Input() item!:{id:number,task:string,status:string}
  get service(){
    return this.ts;
  }
  constructor(private ts:TodoService,private popupService: PopupService) { }


  openPopup(item:any) {
    this.popupService.openPopup(item);
  }
  deleteItem(id:number){
    this.ts.deleteItem(id);
  }
  editItem(id:number){
    console.log("editing the item at index ",id);
  }
}
