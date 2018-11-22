import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Contato, { Tipo } from '../../contato';

@Component({
  selector: 'app-formulario-contato',
  templateUrl: './formulario-contato.component.html',
  styleUrls: ['./formulario-contato.component.css']
})
export class FormularioContatoComponent implements OnInit {

  @Output()
  salvar:EventEmitter<Contato> = new EventEmitter<Contato>();

  id:string = '';
  name:string = '';
  email:string = '';
  telefone:string = '';
  tipo:Tipo;
  tipos:Array<string> = Object.keys(Tipo).filter(k=> /\D/.test(k));

  constructor() { }

  ngOnInit() {
  }

  enviar(){
    const contato = new Contato(
      this.id != null ? parseInt(this.id) : undefined,
      this.name,
      this.email,
      this.telefone,
      this.tipo
    );
    this.salvar.emit(contato);
    this.limparCampos();
  }
  limparCampos(){
    this.name = '';
    this.email = '';
    this.telefone = '';
    this.id = '';
    this.tipo = undefined;
  }

}
