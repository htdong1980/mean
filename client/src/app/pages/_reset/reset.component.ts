import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'reset',
  templateUrl: './reset.html',
  styleUrls: ['./reset.scss']
})
export class ResetComponent {

  public form: FormGroup;
  // public username: AbstractControl;
  public email: AbstractControl;
  // public password: AbstractControl;
  public submitted: boolean = false;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      // 'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      // 'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
    // this.username = this.form.controls['username'];
    this.email = this.form.controls['email'];
    // this.password = this.form.controls['password'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }
}