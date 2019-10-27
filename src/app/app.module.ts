import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';

// import { AppRoutingModule } from './app-routing.module';

import { CU_ROUTE } from './sysgen/CURoute';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FootComponent } from './foot/foot.component';
import { LocalService } from './sysgen/localservices';
import { DetailComponent } from './detail/detail.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGalleryComponent } from './admin/admin-gallery/admin-gallery.component';
import { GalleryCreateComponent } from './admin/gallery-create/gallery-create.component';
import { PostCreateComponent } from './admin/post-create/post-create.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AuthInterceptor } from './sysgen/auth.interceptor';
import { PostAllComponent } from './admin/post-all/post-all.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FootComponent,
    DetailComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    AdminGalleryComponent,
    GalleryCreateComponent,
    PostCreateComponent,
    AdminHomeComponent,
    PostAllComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
     ImageCropperModule,
    CU_ROUTE,
    HttpClientModule,
    ReactiveFormsModule,
   
  ],
  providers: [LocalService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
