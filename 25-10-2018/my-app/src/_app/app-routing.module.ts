import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {
    path: 'contatos',
    component: ContatoComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
