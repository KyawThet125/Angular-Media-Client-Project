import { RouterModule,Routes } from "@angular/router";
import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

const CUROUTE: Routes = [
    { path: '', component: HomeComponent }
];

export const CU_ROUTE = RouterModule.forRoot(CUROUTE);

