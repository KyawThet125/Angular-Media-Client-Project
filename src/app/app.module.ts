import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';

import { CU_ROUTE} from './sysgen/CURoute';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FootComponent } from './foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    CU_ROUTE,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
