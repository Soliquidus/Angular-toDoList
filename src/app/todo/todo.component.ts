import {Component, OnInit} from '@angular/core';
import {TodoService} from "../services/todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  date: any;
  todos: any = [];

  constructor(private todoService: TodoService,
              private router: Router) {
  }

  ngOnInit() {
    this.date = this.todoService.date
    this.todos = this.todoService.todos
  }

  onChangeStatus(i: number) {
    this.todoService.onChangeStatus(i)
  }

  onChangeIsModif(i: number) {
    this.todoService.onChangeIsModif(i)
  }

  onView(id: number) {
    this.router.navigate(["single-todo", id])
  }
}
