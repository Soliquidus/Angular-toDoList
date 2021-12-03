import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  date = new Date();
  todos: any = [];
  todoSlice: any = [];

  // Simuler du fetching pour utiliser l'asynchrone
  constructor() {
    this.todos = new Promise((resolve, reject) => {
      const data = [
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
      if (data.length) {
        setTimeout(() => {
          this.todoSlice = data;
          resolve(data);
        }, 2000)
      } else {
        reject("Pas de données disponibles sur le serveur")
      }
    });
  }

  onChangeStatus(i: number) {
    this.todoSlice[i].status = !this.todoSlice[i].status;
  }

  onChangeIsModif(i: number) {
    this.todoSlice[i].changed = !this.todoSlice[i].changed
  }

  getTodo(index: number) {
    if (this.todoSlice[index]) {
      return this.todoSlice[index]
    }
    return false
  }
}
