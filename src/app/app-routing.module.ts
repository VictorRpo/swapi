import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { PeopleComponent } from './people/people.component';


const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'films',
    component: FilmsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }