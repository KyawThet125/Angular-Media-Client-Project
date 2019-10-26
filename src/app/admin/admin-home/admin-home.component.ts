import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/sysgen/localservices';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor(private http : LocalService) { }

  ngOnInit() {
    this.http.getAllAdminCat().subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }

}
