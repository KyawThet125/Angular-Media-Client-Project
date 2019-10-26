import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()

export class LocalService {
    BASE_URL = 'http://localhost:3000/';
    catUrl = this.BASE_URL + 'cats';
    productUrl = this.BASE_URL + 'cat/';
    loginUrl = this.BASE_URL + 'user/api/login';
    adminCatUrl = this.BASE_URL + 'admin/cat/all';
    adminGalleryAllUrl = this.BASE_URL + 'admin/gallery/all';
    adminUploadImageUrl = this.BASE_URL + 'admin/image/upload';
    adminProductPignate = this.BASE_URL + "admin/product/paginate";

    isAuth = new Subject<boolean>();
    authBool = this.isAuth.asObservable();

    changeAuth(val: boolean) {
        this.isAuth.next(val);
    }

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

    loginUserNow(data) {
        return this.http.post(this.loginUrl,data).pipe(
           map(
                (response: any) => response
            )
        );
    }

    getAllAdminCat() {
        return this.http.get(this.adminCatUrl).pipe(
            map(
                (response: any) => response
            )
        );
    }

    getAllAdminGallery() {
        return this.http.get(this.adminGalleryAllUrl).pipe(
            map(
                (response: any) => response
            )
        );
    }

    uploadImage(data) {
        return this.http.post(this.adminUploadImageUrl, data).pipe(
            map(
                (response: any) => response
            )
        );
    }

    getProductPaginate(start, limit) {
        const link = this.adminProductPignate + '/' + start + "/" + limit;
        return this.http.get(link).pipe(
            map(
                (response: any) => response
            )
        )
    }
}