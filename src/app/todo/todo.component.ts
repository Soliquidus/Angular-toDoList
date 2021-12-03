import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from "../services/todo.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {

  date: any;
  todos: any = [];
  todosSub: any = Subscription;

  constructor(private todoService: TodoService,
              private router: Router) {
  }

  ngOnInit() {
    this.date = this.todoService.date
    this.todosSub = this.todoService.todosSubject.subscribe(
      {
        next: (value: any[]) => this.todos = value,
        error: (error) => console.log("Erreur : " + error),
        complete: () => console.log("Observable complété.")
      }
    );
    this.todoService.emitTodos();
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

  ngOnDestroy(): void {
    this.todosSub.unsubscribe();
  }
}
