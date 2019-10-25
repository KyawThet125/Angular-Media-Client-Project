import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalService } from '../sysgen/localservices';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id;
  products;
  constructor(private route: ActivatedRoute,private http : LocalService) {
    this.id = route.snapshot.params['id'];
   }

  ngOnInit() {
    this.http.getDetailProductd(this.id).subscribe(
      response => {
        if (response.con) {
          this.products = response.msg;
          console.log(response.msg);
        } else {
          alert(response.msg)
        }
      },
      error => {
        console.log(error)
      }
    )
  }

}
