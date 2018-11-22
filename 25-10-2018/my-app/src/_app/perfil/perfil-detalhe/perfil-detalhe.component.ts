import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Perfil from '../perfil';

@Component({
  selector: 'app-perfil-detalhe',
  templateUrl: './perfil-detalhe.component.html',
  styleUrls: ['./perfil-detalhe.component.css']
})
export class PerfilDetalheComponent implements OnInit {

  @Input()
  perfil:Perfil;

  @Output()
  notificar: EventEmitter<Perfil> = new EventEmitter<Perfil>();
  constructor() { }

  ngOnInit() {
  }

  notificarPai() {
    this.notificar.emit(this.perfil);
  }

}
