import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalService } from 'src/app/sysgen/localservices';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Loki } from 'src/app/sysgen/loki';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form;

  constructor(private http : LocalService,private router : Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    })

  }
  startLogin(data) {
    this.http.loginUserNow(data).subscribe(
      response => {
        if (response.con) {
          Loki.save(response.token);
          this.http.changeAuth(true);
          this.router.navigate(['admin']);
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
