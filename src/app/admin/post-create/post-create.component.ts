import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalService } from 'src/app/sysgen/localservices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  postForm;
  cats;

  constructor(private http : LocalService,private router : Router) { }

  ngOnInit() {
    this.http.getAllCats().subscribe(
      response => {
        this.cats = response.msg;
      },
      error => {
        console.log(error)
      }
   )

    this.postForm = new FormGroup({
      'cat_id': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required),
      'image': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
    });
  }

  startPost(data) {
    console.log("Form data is " + data);
    this.http.productCreate(data).subscribe(
      response => {
        if (response.con) {
          console.log(response.msg)
          alert("post create success");
          this.router.navigate(['/admin/post/all'])
        }
      },
      error => {
        console.log(error)
      }
    )
  }

}
