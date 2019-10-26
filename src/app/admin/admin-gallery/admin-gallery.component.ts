import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/sysgen/localservices';

@Component({
  selector: 'app-admin-gallery',
  templateUrl: './admin-gallery.component.html',
  styleUrls: ['./admin-gallery.component.scss']
})
export class AdminGalleryComponent implements OnInit {
  images;
  constructor(private http : LocalService) { }

  ngOnInit() {
    this.http.getAllAdminGallery().subscribe(
      response => {
        if (response.con) {
          this.images = response.msg;
        } else {
          alert(response.con);
        }
      },
      error => {
        console.log(error);
      }
   )

  }
  copyImage(image) {
    let copyimage = "http://localhost:3000/uploads/" + image;
    let input = document.createElement('input');
    input.value = copyimage;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }

}
