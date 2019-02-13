import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationService } from './services/authorization.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'configuracoes', loadChildren: './shared/configuracoes/configuracoes.module#ConfiguracoesPageModule' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'admin',
    canActivate:[AuthorizationService], 
    loadChildren: './admin/admin-routing.module#AdminRoutingModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
