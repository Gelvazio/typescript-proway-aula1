import { Component, OnInit } from '@angular/core';
import Contato from '../contato';

@Component({
  selector: 'app-cadastro-contato',
  templateUrl: './cadastro-contato.component.html',
  styleUrls: ['./cadastro-contato.component.css']
})
export class CadastroContatoComponent implements OnInit {

  contatos:Array<Contato> = [];

  constructor() { }

  ngOnInit() {
  }

  handlerSalvar(contato:Contato){
    this.contatos.push(contato);
  }
}
