import { Component, OnInit } from '@angular/core';
import { LocalService } from '../sysgen/localservices';
import { Loki } from '../sysgen/loki';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isAuth;

  constructor(private http : LocalService,private router: Router) { }

  ngOnInit() {
    this.http.authBool.subscribe(
      response => {
        this.isAuth = response;
      }
    );
  }

  userLogout() {
    Loki.remove();
    this.router.navigate(['/']);
    this.http.changeAuth(false);
  }

}
