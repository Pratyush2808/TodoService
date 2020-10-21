import { Component, OnInit } from '@angular/core';
import { TodoService } from '../TodoService.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  todo_details:any

  constructor(private todoServ:TodoService) { }
 
  ngOnInit(): void {
    this.todo_details=this.todoServ.todolist
  }

}
