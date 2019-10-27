import { Component, OnInit } from '@angular/core';
import { LocalService } from '../sysgen/localservices';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cats;
  showLoad = false;
  constructor(private http : LocalService) { }

  ngOnInit() {
    this.showLoad = true;
  this.http.getAllCats().subscribe(
    response => {
      this.cats = response.msg
      this.showLoad = false
    },
    error => {
      console.log(error);
    }
  )
  }

}
