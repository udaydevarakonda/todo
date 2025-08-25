import { Component, Input } from '@angular/core';
import { TodoService } from '../../todo.service';
import { PopupService } from '../../popup/popup.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-comp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-comp.component.html',
  styleUrl: './todo-comp.component.scss'
})
export class TodoCompComponent {

editable=false;
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
    this.editable=!this.editable;
    console.log("editing the item at index ",id);
  }
}
