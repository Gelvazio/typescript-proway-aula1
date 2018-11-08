import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ContatoDetalheComponent } from './contato/contato-detalhe/contato-detalhe.component';
import { PerfilDetalheComponent } from './perfil/perfil-detalhe/perfil-detalhe.component';
import { PerfilFotoComponent } from './perfil/perfil-foto/perfil-foto.component';
import { CadastroContatoComponent } from './contato/cadastro-contato/cadastro-contato.component';
import { ListaContatosComponent } from './contato/cadastro-contato/lista-contatos/lista-contatos.component';
import { FormularioContatoComponent } from './contato/cadastro-contato/formulario-contato/formulario-contato.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    PerfilComponent,
    ContatoDetalheComponent,
    PerfilDetalheComponent,
    PerfilFotoComponent,
    CadastroContatoComponent,
    ListaContatosComponent,
    FormularioContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
