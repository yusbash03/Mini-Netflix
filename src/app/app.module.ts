import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {  HttpClientModule } from '@angular/common/http';
import { MyMovieDateService } from './services/my-movie-date.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FavouriteMoviesComponent } from './favourite-movies/favourite-movies.component';

const appRoutes: Routes = [
  { path: 'movieshomepage', component: HomepageComponent },
  { path: 'movieshomepage/:id',      component: MovieDetailsComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  { path: '',
    redirectTo: '/movieshomepage',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MovieDetailsComponent,
    NavbarComponent,
    PagenotfoundComponent,
    FavouriteMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule
  ],
  providers: [MyMovieDateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
