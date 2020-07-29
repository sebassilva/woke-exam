import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { UserComponent } from "./user/user.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { AuthGuard } from './guards/auth-guard.service';



const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'user-detail', component: UserDetailComponent, canActivate: [AuthGuard] },
  { path: 'user-detail/:id', component: UserDetailComponent, canActivate: [AuthGuard] },

  // Redirect non existing to login
  {path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
