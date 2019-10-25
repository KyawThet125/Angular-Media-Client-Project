import { RouterModule,Routes } from "@angular/router";
import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DetailComponent } from '../detail/detail.component';

const CUROUTE: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detail/:id', component: DetailComponent }
];

export const CU_ROUTE = RouterModule.forRoot(CUROUTE);

