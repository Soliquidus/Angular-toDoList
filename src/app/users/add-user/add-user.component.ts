import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user.model";
import {Address} from "../../models/address.model";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: any = FormGroup;

  constructor(private formBuilder: FormBuilder,
              private usersService: UsersService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initUserForm();
  }

  private initUserForm() {
    this.userForm = this.formBuilder.group({
      firstName: this.formBuilder.control("", [Validators.required, Validators.minLength(3)]),
      lastName: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control("", [Validators.required, Validators.email, Validators.minLength(5)]),
      description: this.formBuilder.control("", [Validators.required, Validators.minLength(15)]),
      birthDate: this.formBuilder.control("", Validators.required),
      address: this.formBuilder.group({
        street: this.formBuilder.control("", Validators.required),
        state: this.formBuilder.control("", Validators.required),
        zipCode: this.formBuilder.control("", Validators.required),
        city: this.formBuilder.control("", Validators.required),
      }),
      aliases: this.formBuilder.array([]),
    })
  }

  getAliases(): FormArray {
    return this.userForm.get("aliases") as FormArray;
  }

  addAliases(): void {
    this.getAliases().push(this.formBuilder.control("", Validators.required))
  }

  onSubmit(): void {
    const userData = this.userForm.value;
    const address = new Address(userData.street, userData.city, userData.state, userData.zipCode);
    const alias = userData.aliases ? userData.aliases : [];
    const user = new User(
      userData.firstName,
      userData.lastName,
      userData.email,
      address,
      userData.description,
      userData.birthDate,
      alias);
    this.usersService.addUser(user);
    this.router.navigate(["users"]);
    console.log(this.userForm.value)
  }
}
