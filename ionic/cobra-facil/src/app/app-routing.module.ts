import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { 
    path: 'admin', 
    canActivate:[AuthenticationService], 
    loadChildren: './admin/admin-routing.module#AdminRoutingModule' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
