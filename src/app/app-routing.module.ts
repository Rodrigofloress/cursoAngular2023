import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/routes/home/home.component';
import { IngresarComponent } from './components/routes/ingresar/ingresar.component';
import { SeriesComponent } from './components/routes/series/series.component';
import { MoviesComponent } from './components/routes/movies/movies.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'ingresar',
    component: IngresarComponent
  },
  {
    path: 'series',
    component: SeriesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
