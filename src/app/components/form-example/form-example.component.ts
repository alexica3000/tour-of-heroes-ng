import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {
  @ViewChild('f') signupForm?: NgForm;

  defaultSelect = '2';
  genders = ['male', 'female'];
  submitted = false;
  enteredData = {
    name: '',
    age: '',
    email: '',
    select_test: '',
    gender: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(form: NgForm): void {
  //   console.log(form);
  // }

  onSubmit(): void {
    this.submitted = true;
    this.enteredData.name = this.signupForm?.value.name;
    this.enteredData.age = this.signupForm?.value.age;
    this.enteredData.email = this.signupForm?.value.email;
    this.enteredData.select_test = this.signupForm?.value.select_test;
    this.enteredData.gender = this.signupForm?.value.gender;

    this.signupForm?.reset();
  }
}
