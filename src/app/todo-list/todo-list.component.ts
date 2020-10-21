import { Component, OnInit } from '@angular/core';
import { TodoService } from '../TodoService.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todo_list:any;

  constructor(private todoServ:TodoService){ }

  deleteItem(index){
    this.todoServ.deleteTodo(index);
  }

  ngOnInit(): void {
    this.todo_list=this.todoServ.todolist
  }
}
