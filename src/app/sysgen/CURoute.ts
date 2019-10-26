import { RouterModule,Routes } from "@angular/router";
import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DetailComponent } from '../detail/detail.component';
import { AuthComponent } from '../auth/auth.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { AdminComponent } from '../admin/admin.component';
import { AdminHomeComponent } from '../admin/admin-home/admin-home.component';
import { GalleryCreateComponent } from '../admin/gallery-create/gallery-create.component';
import { PostCreateComponent } from '../admin/post-create/post-create.component';
import { AdminGalleryComponent } from '../admin/admin-gallery/admin-gallery.component';
import { PostAllComponent } from '../admin/post-all/post-all.component';

const CUROUTE: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detail/:id', component: DetailComponent },
    {
        path: 'auth', component: AuthComponent, children :[
            { path: '', component: LoginComponent },
            {path : 'register', component:RegisterComponent}
        ]
    },
    {
        path: 'admin', component: AdminComponent, children: [
            { path: '', component: AdminHomeComponent },
            { path: 'gallery/create', component: GalleryCreateComponent },
            { path: 'post/create', component: PostCreateComponent },
             { path: 'post/all', component: PostAllComponent },
            { path: 'gallery', component: AdminGalleryComponent }
            
    ]},
];

export const CU_ROUTE = RouterModule.forRoot(CUROUTE);

