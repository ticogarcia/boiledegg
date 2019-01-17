import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/error/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: './landing/landing.module#LandingModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
        routes
    )
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
