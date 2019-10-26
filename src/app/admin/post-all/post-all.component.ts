import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/sysgen/localservices';


@Component({
  selector: 'app-post-all',
  templateUrl: './post-all.component.html',
  styleUrls: ['./post-all.component.scss']
})
export class PostAllComponent implements OnInit {
  products;
  page;
  pages;

  constructor(private http : LocalService) { }

  ngOnInit() {
    this.forPaginate(1)
  }

  reloadPage(num) {
    let cPage = this.page + num;
    if (cPage <= this.pages && cPage >= 1) {
      this.forPaginate(cPage);
    }
  }

  forPaginate(start) {
    this.http.getProductPaginate(start, 20).subscribe(
      response => {
        if (response.con) {
          this.products = response.msg.docs;
          this.page = response.msg.page;
          this.pages = response.msg.pages;
        } else {
          console.log(response);
        }
         
      },
      error => {
        console.log(error)
      }
    )
  }

}
