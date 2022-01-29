import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/models/todoItem.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }
  
  incompletedTaskCount: number = 0;
  todoItems: TodoItem[] = [
    new TodoItem (1,"Create Angular app", true),
    new TodoItem (2,"Create Web API with .NET Core", false),
    new TodoItem (3,"Generate Database", false),
  ]

  filter(){
    this.todoItems = this.todoItems.filter(x=>!x.isDone);
  }

  get getInCompletedTaskCount():number{
    return this.incompletedTaskCount = this.todoItems.filter(x=>!x.isDone).length;
  }

  addNewItem(item:string){
     this.todoItems.push(new TodoItem(undefined,item,false));
     
  }

  ngOnInit(): void {
   
  }

}
