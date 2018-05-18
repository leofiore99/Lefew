import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRountingModule } from './app.routing.module';
import { CommonModule } from '@angular/common';
import { HomeService } from './home/home.service';
import { InjectorHttpService } from './api/http.injector.service';
import { InterceptorService } from 'ng2-interceptors';
import { HttpInterceptorModule } from './api/http.interceptor.module';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    FormsModule,
    CommonModule,
    HttpInterceptorModule,
    HttpModule
  ],
  providers: [
    HomeService,
    InjectorHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
