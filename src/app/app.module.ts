import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {TodoComponent} from './todo/todo.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TodoService} from "./services/todo.service";
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SingleTodoComponent} from './single-todo/single-todo.component';
import {ContactComponent} from './contact/contact.component';
import {AddTodoComponent} from './todo/add-todo/add-todo.component';
import {UsersComponent} from './users/users.component';
import {AddUserComponent} from './users/add-user/add-user.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    SingleTodoComponent,
    ContactComponent,
    AddTodoComponent,
    UsersComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
