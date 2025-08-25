import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private dialog: MatDialog) {}

  openPopup(data:any) {
    this.dialog.open(PopupComponent,{
      data:{
        id:data.id,
        task:data.task,
        status:data.status
      },panelClass:'popup'
    });
  }
  closeDialog(){
    this.dialog.closeAll();
  }
}
