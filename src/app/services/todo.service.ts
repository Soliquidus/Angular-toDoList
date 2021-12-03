import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  date = new Date();
  todos: any = [];
  todosSubject = new Subject<any[]>();

  // Simuler du fetching pour utiliser l'asynchrone
  constructor() {
    setTimeout(() => {
      this.todos = [
        {
          name: "Projet 1",
          status: true,
          image: "https://www.placeimg.com/300/300/tech",
          changed: false,
          description: "Sollicitudin eros, aptent purus suspendisse sit in omnis consectetur nostrud, placerat ornare, " +
            "platea occaecati placeat, vitae pariatur facilisis ea, imperdiet phasellus? " +
            "Voluptatum urna convallis, animi leo, diam atque aptent vero."
        },
        {
          name: "Projet 2",
          status: false,
          image: "https://www.placeimg.com/300/300/tech",
          changed: false,
          description: "Sollicitudin eros, aptent purus suspendisse sit in omnis consectetur nostrud, placerat ornare, " +
            "platea occaecati placeat, vitae pariatur facilisis ea, imperdiet phasellus? " +
            "Voluptatum urna convallis, animi leo, diam atque aptent vero."
        },
        {
          name: "Projet 3",
          status: true,
          image: "https://www.placeimg.com/300/300/tech",
          changed: false,
          description: "Sollicitudin eros, aptent purus suspendisse sit in omnis consectetur nostrud, placerat ornare, " +
            "platea occaecati placeat, vitae pariatur facilisis ea, imperdiet phasellus? " +
            "Voluptatum urna convallis, animi leo, diam atque aptent vero."
        },
        {
          name: "Projet 4",
          status: false,
          image: "https://www.placeimg.com/300/300/tech",
          changed: false,
          description: "Sollicitudin eros, aptent purus suspendisse sit in omnis consectetur nostrud, placerat ornare, " +
            "platea occaecati placeat, vitae pariatur facilisis ea, imperdiet phasellus? " +
            "Voluptatum urna convallis, animi leo, diam atque aptent vero."
        },
      ];
      this.emitTodos();
    }, 3000);
  }

  onChangeStatus(i: number) {
    this.todos[i].status = !this.todos[i].status;
    this.emitTodos()
  }

  onChangeIsModif(i: number) {
    this.todos[i].changed = !this.todos[i].changed
    this.emitTodos()
  }

  getTodo(index: number) {
    if (this.todos[index]) {
      return this.todos[index]
    }
    return false
  }

  public emitTodos() {
    this.todosSubject.next(this.todos);
  }
}
