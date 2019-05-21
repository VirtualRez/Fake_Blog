import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
//Service
import { PostService } from './services/post.service';
//Router
import { Routes, RouterModule } from '@angular/router';
const misRutas: Routes = [
  { 'path': 'home', 'component': HomeComponent },
  { 'path': 'post/:id', 'component': DetailComponent },
  { 'path': '', 'component': HomeComponent },
  { 'path': '**', 'component': HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(misRutas)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
