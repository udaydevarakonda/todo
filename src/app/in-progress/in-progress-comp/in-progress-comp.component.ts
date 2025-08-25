import { Component, Input } from '@angular/core';
import { TodoService } from '../../todo.service';
import { PopupService } from '../../popup/popup.service';

@Component({
  selector: 'app-in-progress-comp',
  standalone: true,
  imports: [],
  templateUrl: './in-progress-comp.component.html',
  styleUrl: './in-progress-comp.component.scss'
})
export class InProgressCompComponent {
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
