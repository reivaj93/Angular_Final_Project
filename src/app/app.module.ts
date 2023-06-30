import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeCardComponent } from './joke-card/joke-card.component';
import { InfoComponent } from './info/info.component';
import {HttpClientModule} from '@angular/common/http';
import { ImgComponent } from './img/img.component';
import { Img2Component } from './img2/img2.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeCardComponent,
    InfoComponent,
    ImgComponent,
    Img2Component,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
