import {Injectable} from '@angular/core';
import {User} from "../models/user.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [];
  userSub = new Subject<User[]>();

  constructor() {
  }

  emitUsers(): void {
    this.userSub.next(this.users);
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
