import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAccountComponent } from './user-account/user-account.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'account', component: UserAccountComponent },
  { path: "signup", component: SignupComponent},
  { path: "login", component: LoginComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
