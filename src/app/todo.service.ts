import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  statusArray=['todo','done','in-progress'];
  // itemList!:{
  //   id:number,task:string,status:string;
  // }
  i=12;
  itemList=[
    {id:0,task:'Task 1',status:'todo'},
    {id:1,task:'Task 1',status:'todo'},
    {id:2,task:'Task 2',status:'done'},
    {id:3,task:'Task 3',status:'in-progress'},
    {id:4,task:'Task 4',status:'todo'},
    {id:5,task:'Task 6',status:'in-progress'},
    {id:6,task:'Task 7',status:'done'},
    {id:7,task:'Task 8',status:'todo'},
    {id:8,task:'Task 9',status:'done'},
    {id:10,task:"1",status:"done"},
    {id:9,task:'Task  10aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',status:'in-progress'},
    {id:11,task:"1",status:"done"},
    {id:12,task:"1",status:"done"},
  ];
  constructor() { }

  addItem(task:string){
    this.itemList.push({id:this.i,task:task,status:'todo'});
    this.i++;
  }

  deleteItem(id:number){
    // this.todoList = this.todoList.filter((item)=>item.id!=id);
    this.itemList.splice(this.itemList.findIndex((item)=>item.id==id),1);
  }

  getNumberOfItems(searchWord:string){
    return this.itemList.filter((item)=>item.status==searchWord).length;
  }

 
  saveItem(modifiedItem:{id:number,task:string,status:string}){
    this.itemList.find((item)=>{
      if(item.id==modifiedItem.id){
        item.task=modifiedItem.task;
        item.status=modifiedItem.status;
      }
    });
    

  }

}
