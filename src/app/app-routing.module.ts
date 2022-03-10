import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const components = [
  SignupComponent,
  SigninComponent,
  LandingComponent,
  HeaderComponent
]