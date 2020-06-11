import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';

import { AboutComponent } from './modules/general/about/about.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { SigninComponent } from './modules/general/signin/signin.component';

// To lazy load Angular modules, use loadchildren (instead of component) in your AppRoutingModule routes configuration as follows.

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'contact', component: ContactComponent },
  {
    path: 'contact',
    loadChildren: () =>
      import('././modules/general/contact/contact.module').then(
        (mod) => mod.ContactModule
      ),
  },
  // { path: 'about', component: AboutComponent },
  {
    path: 'about',
    loadChildren: () =>
      import('././modules/general/about/about.module').then(
        (mod) => mod.AboutModule
      ),
  },
  // { path: 'signin', component: SigninComponent },
  {
    path: 'signin',
    loadChildren: () =>
      import('././modules/general/signin/signin.module').then(
        (mod) => mod.SigninModule
      ),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    // CommonModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
