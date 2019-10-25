import { Component, OnInit } from '@angular/core';
import { LocalService } from '../sysgen/localservices';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cats;
  constructor(private http : LocalService) { }

ngOnInit() {
  this.http.getAllCats().subscribe(
    response => {
      this.cats = response.msg
      console.log(response.msg);
    },
    error => {
      console.log(error);
    }
  )
  }

}
