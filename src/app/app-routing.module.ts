import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { JokeCardComponent } from './joke-card/joke-card.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path:'Info', component:InfoComponent},
  {path:'Joke', component:JokeCardComponent},
  {path :'Home', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
