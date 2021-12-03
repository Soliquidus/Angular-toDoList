import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../models/user.model";
import {UsersService} from "../services/users.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  users: User[] = [];
  usersSubscription: any = Subscription

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersSubscription = this.usersService.userSub.subscribe(
      (usersRecup: User[]) => {
        this.users = usersRecup;
      }
    );
    this.usersService.emitUsers();
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }

}
