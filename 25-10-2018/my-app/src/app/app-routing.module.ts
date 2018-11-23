import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CadastroContatoComponent } from './contato/cadastro-contato/cadastro-contato.component';
import { AlunosComponent } from './alunos/alunos.component';
import { FormularioContatoComponent } from './contato/cadastro-contato/formulario-contato/formulario-contato.component';
import { ListaContatosComponent } from './contato/cadastro-contato/lista-contatos/lista-contatos.component';
import { ListaAlunosComponent } from './alunos/lista-alunos/lista-alunos.component';
import { FormAlunoComponent } from './alunos/form-aluno/form-aluno.component';

const routes: Routes = [
  {
    path:'contatos',
    component: ListaContatosComponent
  },
  {
    path:'contatos/:id',
    component:FormularioContatoComponent
  },
  {
    path:'alunos',
    component:ListaAlunosComponent
  },
  {
    path:'alunos/:id',
    component:FormAlunoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
