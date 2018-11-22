import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CadastroContatoComponent } from './contato/cadastro-contato/cadastro-contato.component';
import { AlunosComponent } from './alunos/alunos.component';

const routes: Routes = [
  {
    path:'contatos',
    component:CadastroContatoComponent
  },
  {
    path:'alunos',
    component:AlunosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
