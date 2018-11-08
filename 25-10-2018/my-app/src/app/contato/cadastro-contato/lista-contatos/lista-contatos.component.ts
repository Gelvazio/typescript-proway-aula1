import { Component, OnInit, Input } from '@angular/core';
import Contato from '../../contato';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.css']
})
export class ListaContatosComponent implements OnInit {

  @Input()
  contatos:Contato[];
  
  constructor() { }

  ngOnInit() {
  }

}
