import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  date = new Date();
  todos = [
    {
      todoName: "Projet 1",
      todoStatus: true,
      image: "http://placehold.it/150",
      isModif: false
    },
    {
      todoName: "Projet 2",
      todoStatus: false,
      image: "http://placehold.it/150",
      isModif: false
    },
    {
      todoName: "Projet 3",
      todoStatus: true,
      image: "http://placehold.it/150",
      isModif: false
    },
    {
      todoName: "Projet 4",
      todoStatus: false,
      image: "http://placehold.it/150",
      isModif: false
    },
  ]

  onChangeStatus(i: number) {
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
  }

  onChangeIsModif(i: number) {
    this.todos[i].isModif = !this.todos[i].isModif
  }

  getTodo(index: number) {
    if(this.todos[index]) {
      return this.todos[index]
    }
    return false
  }
}
