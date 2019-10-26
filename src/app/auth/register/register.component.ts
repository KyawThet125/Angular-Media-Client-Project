import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])),
      'email': new FormControl("", Validators.compose([
        Validators.required,
        Validators.email,
      ])),
      'password': new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    })

  }
  startRegister(data) {
    console.log(data);
  }

}
