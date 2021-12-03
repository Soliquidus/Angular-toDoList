import { Component, OnInit } from '@angular/core';
import {Todo} from "../../models/todo.model";
import {TodoService} from "../../services/todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todo = new Todo();
  constructor(private todoService: TodoService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.todoService.addTodo(this.todo);
    this.router.navigate(["todos"]);
  }

}
