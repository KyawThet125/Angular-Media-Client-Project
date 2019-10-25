import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()

export class LocalService {
    BASE_URL = 'http://localhost:3000/';
    catUrl = this.BASE_URL + 'cats';
    productUrl = this.BASE_URL + 'cat/';
    constructor(private http: HttpClient) {
        
    }

    getAllCats() {
        return this.http.get(this.catUrl).pipe(
            map(
               (response : any) => response
            )
        )
    }

    getDetailProductd(id) {
        const catProductUrl = this.productUrl + id;
        return this.http.get(catProductUrl).pipe(
            map(
                (response: any) => response
            )
        );
    }
}