import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm!: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
    });

    this.signupForm.valueChanges.subscribe(
      (value) => console.log(value),
    );

    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status),
    );
  }

  onSubmit(): void {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby(): void {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm?.get('hobbies')).push(control);
  }

  getHobbies(): FormArray {
    return this.signupForm.get('hobbies') as FormArray;
  }

  forbiddenNames(control: AbstractControl): {[s: string]: boolean} | null {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }

    return null;
  }

  forbiddenEmails(control: AbstractControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve (null);
        }
      }, 1500);
    });
  }
}
