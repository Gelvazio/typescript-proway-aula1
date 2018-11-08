import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Contato from '../contato';

@Component({
  selector: 'app-contato-detalhe',
  templateUrl: './contato-detalhe.component.html',
  styleUrls: ['./contato-detalhe.component.css']
})
export class ContatoDetalheComponent implements OnInit {

  @Input()
  contato:Contato;

  @Output()
  notificar: EventEmitter<Contato> = new EventEmitter<Contato>();

  constructor() { }

  ngOnInit() {
  }
  
  notificarPai() {
    this.notificar.emit(this.contato);
  }
}
