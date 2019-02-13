import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'profile/view', loadChildren: './profile/profile-form/profile-form.module#ProfileFormPageModule' },
  { path: 'contas/list', loadChildren: './contas/conta-list/conta-list.module#ContaListPageModule' },
  { path: 'contas/form', loadChildren: './contas/conta-form/conta-form.module#ContaFormPageModule' },
  { path: 'categorias/list', loadChildren: './categorias/categoria-list/categoria-list.module#CategoriaListPageModule' },
  { path: 'categorias/form', loadChildren: './categorias/categoria-form/categoria-form.module#CategoriaFormPageModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
