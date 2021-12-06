import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {Todo} from "../models/todo.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  date = new Date();
  todos: any = Todo;
  todosSubject = new Subject<any[]>();

  constructor(private httpClient: HttpClient) {
    this.getTodosFromServer();
    // setTimeout(() => {
    //   this.todos = [
    //     {
    //       name: "Projet 1",
    //       status: true,
    //       image: "https://www.placeimg.com/300/300/tech",
    //       changed: false,
    //       description: "Sollicitudin eros, aptent purus suspendisse sit in omnis consectetur nostrud, placerat ornare, " +
    //         "platea occaecati placeat, vitae pariatur facilisis ea, imperdiet phasellus? " +
    //         "Voluptatum urna convallis, animi leo, diam atque aptent vero."
    //     },
    //     {
    //       name: "Projet 2",
    //       status: false,
    //       image: "https://www.placeimg.com/300/300/tech",
    //       changed: false,
    //       description: "Sollicitudin eros, aptent purus suspendisse sit in omnis consectetur nostrud, placerat ornare, " +
    //         "platea occaecati placeat, vitae pariatur facilisis ea, imperdiet phasellus? " +
    //         "Voluptatum urna convallis, animi leo, diam atque aptent vero."
    //     },
    //     {
    //       name: "Projet 3",
    //       status: true,
    //       image: "https://www.placeimg.com/300/300/tech",
    //       changed: false,
    //       description: "Sollicitudin eros, aptent purus suspendisse sit in omnis consectetur nostrud, placerat ornare, " +
    //         "platea occaecati placeat, vitae pariatur facilisis ea, imperdiet phasellus? " +
    //         "Voluptatum urna convallis, animi leo, diam atque aptent vero."
    //     },
    //     {
    //       name: "Projet 4",
    //       status: false,
    //       image: "https://www.placeimg.com/300/300/tech",
    //       changed: false,
    //       description: "Sollicitudin eros, aptent purus suspendisse sit in omnis consectetur nostrud, placerat ornare, " +
    //         "platea occaecati placeat, vitae pariatur facilisis ea, imperdiet phasellus? " +
    //         "Voluptatum urna convallis, animi leo, diam atque aptent vero."
    //     },
    //   ];
    //   this.emitTodos();
    // }, 3000);
  }

  public emitTodos() {
    this.todosSubject.next(this.todos);
  }

  onChangeStatus(i: number) {
    this.todos[i].status = !this.todos[i].status;
    this.emitTodos();
    this.saveTodosToServer();
  }

  onChangeIsModif(i: number) {
    this.todos[i].changed = !this.todos[i].changed
    this.emitTodos();
    this.saveTodosToServer();
  }

  getTodo(index: number) {
    if (this.todos[index]) {
      return this.todos[index]
    }
    return false
  }

  addTodo(todo: Todo): void {
    this.todos.unshift(todo);
    this.emitTodos();
    this.saveTodosToServer();
  }

  saveTodosToServer(): void {
    this.httpClient.put("https://yourFirebaseServer/todos.json",
      this.todos).subscribe({
        next: () => {
          console.log("Données enregistrées avec succès !");
        },
        error: (error: any) => {
          console.log("Erreur de sauvegarde de données : " + error);
        },
        complete: () => {
          console.log("Observable sur le transfert de données terminé.")
        }
      }
    )
  }

  getTodosFromServer(): void {
    this.httpClient.get<Todo[]>("https://yourFirebaseServer/todos.json")
      .subscribe({
        next: (todosRecup) => {
          this.todos = todosRecup;
          this.emitTodos()
        },
        error: (error) => {
          console.log("Erreur de récupération des données : " + error)
        },
        complete: () => {
          console.log("Récupération des données terminée.")
        }
      })
  }
}
