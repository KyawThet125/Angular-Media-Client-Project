import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';

import { CU_ROUTE } from './sysgen/CURoute';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FootComponent } from './foot/foot.component';
import { LocalService } from './sysgen/localservices';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FootComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    CU_ROUTE,
    HttpClientModule
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
