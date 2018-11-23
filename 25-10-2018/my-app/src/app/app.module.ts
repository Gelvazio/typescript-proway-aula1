import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ContatoDetalheComponent } from './contato/contato-detalhe/contato-detalhe.component';
import { PerfilDetalheComponent } from './perfil/perfil-detalhe/perfil-detalhe.component';
import { CadastroContatoComponent } from './contato/cadastro-contato/cadastro-contato.component';
import { ListaContatosComponent } from './contato/cadastro-contato/lista-contatos/lista-contatos.component';
import { FormularioContatoComponent } from './contato/cadastro-contato/formulario-contato/formulario-contato.component';
import { AlunosComponent } from './alunos/alunos.component';
import { FormAlunoComponent } from './alunos/form-aluno/form-aluno.component';
import { ListaAlunosComponent } from './alunos/lista-alunos/lista-alunos.component';
import { PerfilFotoComponent } from 'src/_app/perfil/perfil-foto/perfil-foto.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    PerfilComponent,
    ContatoDetalheComponent,
    PerfilDetalheComponent,
    CadastroContatoComponent,
    ListaContatosComponent,
    FormularioContatoComponent,
    AlunosComponent,
    FormAlunoComponent,
    ListaAlunosComponent,
    PerfilFotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
